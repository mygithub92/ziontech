import Product from "./model/product.model";
import Grape from "./model/grape.model";
import User from "./model/user.model";
import Wine from "./model/wine.model";
import * as jwt from 'jsonwebtoken';
import Winery from "./model/winery.model";
import Role from "./model/role.model";
import Transport from "./model/transport.model";
import * as qr from 'qr-image';
import * as fs from 'fs';
import { config } from "./config";

export default class Controller {

    login = (req, res) => {
        const body = req.body;
        User.findOne({
            where: { email: body.email, password: body.password },
            include: [{ model: Role }]
        }).then(user => {
            let token;
            if (user) {
                const roles = user.getDataValue('roles').map(role => {
                    return { id: role.id, name: role.name };
                });
                const payload = {
                    id: user.getDataValue('id'),
                    name: user.getDataValue('name'),
                    roles
                };
                token = jwt.sign(payload, 'JIOwld*232f&l', {
                    expiresIn: '2h'
                });
            }

            res.json({ token });
        });
    }

    getGrapes = (req, res) => {
        if (req.query.history === 'true') {
            Product.scope("hGrapes").findAll().then(products => res.json(products));
        } else {
            Product.scope("grapes").findAll().then(products => res.json(products));
        }
    }

    getGrapeById = (req, res) => {
        Product.findOne({
            where: { id: req.query.productId },
            include: [{ model: Grape }]
        }).then(product => res.json(product));
    }

    createGrape = (req, res) => {
        Product.create({ companyName: req.body.companyName, stageId: 10 }).then(product => {
            delete req.body.companyName;
            Grape.create({ ...req.body, productId: product.id }).then(grape => res.json(grape));
        });
    }

    updateGrape = (req, res) => {
        Product.update({ companyName: req.body.companyName }, { where: { id: req.body.productId } })
            .then(product => {
                delete req.body.companyName;
                Grape.update(req.body, { where: { id: req.body.grapeId } });
                return res.json(product);
            });
    }

    deleteGrape = (req, res) => {
        Grape.findOne({ where: { productId: req.params.id } }).then(grape => {
            if (grape) {
                grape.destroy({ force: true }).then(id => {
                    Product.findOne({ where: { id: req.params.id } }).then(product => {
                        if (product) {
                            product.destroy({ force: true }).then(() => res.json('done'));
                        }
                    });
                });
            }
        });
    }
    transportGrape = (req, res) => {
        Grape.update({ transferred: true }, { where: { productId: req.body.productId } }).then(() => {
            Product.update({ stageId: 20 }, { where: { id: req.body.productId } }).then(() => res.json('Done'));
        });
    }

    getWineries = (req, res) => {
        if (req.query.history === 'true') {
            Product.scope("hWineries").findAll().then(products => {
                res.json(products);
            });
        } else {
            Product.scope("wineries").findAll().then(products => {
                res.json(products);
            });
        }
    }

    getWineryById = (req, res) => {
        Product.findOne({
            where: { id: req.query.productId },
            include: [{ model: Grape }, { model: Winery }]
        }).then(product => res.json(product));
    }

    updateWinery = (req, res) => {
        Grape.update({ actualWeight: req.body.actualWeight }, { where: { productId: req.body.productId } }).then(() => {
            Winery.update(req.body, { where: { id: req.body.wineryId } }).then(winery => {
                res.json(winery);
            });
        });
    }

    createWinery = (req, res) => {
        Grape.update({ actualWeight: req.body.actualWeight }, { where: { productId: req.body.productId } }).then(() => {
            Winery.create({ volume: req.body.volume, userId: req.body.userId, productId: req.body.productId }).then(winery => {
                res.json(winery);
            });
        });
    }

    transportWinery = (req, res) => {
        Winery.update({ transferred: true }, { where: { productId: req.body.productId } }).then(() => {
            Product.update({ stageId: 40 }, { where: { id: req.body.productId } }).then(() => {
                res.json('Done');
            });
        });
    }



    getBottlers = (req, res) => {
        if (req.query.history === 'true') {
            Product.scope("hBottlers").findAll().then(products => {
                res.json(products);
            });
        } else {
            Product.scope("bottlers").findAll().then(products => {
                res.json(products);
            });
        }
    }

    getBottlerById = (req, res) => {
        Product.findOne({
            where: { id: req.query.productId },
            include: [{ model: Grape }, { model: Winery }, { model: Wine }]
        }).then(product => res.json(product));
    }

    updateBottler = (req, res) => {
        Wine.update(req.body, { where: { id: req.body.wineId } }).then(wine => res.json(wine));
    }

    createBottler = (req, res) => {
        const t = { ...req.body, userId: req.body.userId };
        Wine.create(t).then(wine => res.json(wine));
    }

    transportBottler = (req, res) => {
        Wine.update({ transferred: true }, { where: { productId: req.body.productId } }).then(() => {
            Product.update({ stageId: 60 }, { where: { id: req.body.productId } }).then(() => res.json('Done'));
        });
    }
    // Distributor
    getTransports = (req, res) => {
        if (req.query.history === 'true') {
            Product.findAll({
                include: [
                    { model: Grape },
                    { model: Winery }, { model: Wine },
                    {
                        model: Transport,
                        where: { transferred: true }
                    }
                ]
            }).then(products => res.json(products));
        } else {
            Product.scope("distributor").findAll().then(products => {
                const productIds = products.map(product => product.id);
                Transport.findAll({
                    where: { productId: { $in: productIds }, transferred: { $not: true } }
                }).then(transports => res.json({ products, transports }));

            });
        }
    }

    getTransportById = (req, res) => {
        Product.findOne({
            where: { id: req.query.productId },
            include: [{ model: Grape }, { model: Winery }, { model: Wine }]
        }).then(product => {
            if (product) {
                Transport.findOne({
                    where: { productId: product.id, transferred: { $not: true } }
                }).then(transport => res.json({ product, transport }));
            }
        });
    }

    updateTransport = (req, res) => {
        Transport.update(req.body, { where: { id: req.body.transportId } }).then(transport => res.json(transport));
    }

    createTransport = (req, res) => {
        Product.findOne({ where: { id: req.body.productId } }).then(product => {
            if (product) {
                delete req.body.productId;
                Transport.create({ ...req.body, fromStage: product.stageId, userId: req.body.userId, productId: product.id }).then(transport => res.json(transport));
            }
        });
    }

    transport = (req, res) => {
        Transport.update({ transferred: true }, { where: { productId: req.body.productId } }).then(() => {
            Product.findOne({ where: { id: req.body.productId } }).then(product => {
                if (product) {
                    Product.update({ stageId: product.stageId + 10 }, { where: { id: product.id } }).then(() => res.json('Done'));
                }
            });
        });
    }

    getWarehouse = (req, res) => {
        if (req.query.history === 'true') {
            Product.scope("hWarehouse").findAll().then(products => {
                res.json(products);
            });
        } else {
            Product.scope("warehouse").findAll().then(products => {
                res.json(products);
            });
        }
    }

    transportWarehouse = (req, res) => {
        Product.update({ stageId: 80 }, { where: { id: req.body.productId } }).then(() => res.json('Done'));
    }

    getWineJourney = (req, res) => {
        Product.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: Grape,
                    attributes: ['region', 'vineyard', 'variety', 'vintage']
                },
                {
                    model: Transport,
                    attributes: ['from', 'to', 'start', 'end']
                }
            ],
            attributes: ['companyName']
        }).then(product => res.json(product));
    }

    genereate = (req, res) => {
        for (let i = 1; i < 31; i++) {
            this.genereateQR(i);
        }
        res.json('done');
    }

    genereateQR = (id) => {
        const ip = '18.221.40.162';
        qr.image(`http://${ip}/wine/${id}`)
            .pipe(fs.createWriteStream(config.qr(id)));
    }
}

