import Product from "./model/product.model";
import Grape from "./model/grape.model";
import User from "./model/user.model";
import Wine from "./model/wine.model";
import * as jwt from 'jsonwebtoken';
import Winery from "./model/winery.model";

export default class Controller {

    login = (req, res) => {
        const body = req.body;
        User.findOne({ where: { email: body.email, password: body.password } }).then(user => {
            let token;
            if (user) {
                const payload = {
                    sub: user.getDataValue('id'),
                    name: user.getDataValue('name'),
                    role: user.getDataValue('roleId')
                };
                token = jwt.sign(payload, 'JIOwld*232f&l', {
                    expiresIn: '12h'
                });
            }

            res.json({ token });
        });
    }

    getGrapes = (req, res) => {
        if (req.query.history === 'true') {
            Product.scope("hGrapes").findAll().then(products => {
                res.json(products);
            });
        } else {
            Product.scope("grapes").findAll().then(products => {
                res.json(products);
            });
        }
    }

    getGrapeById = (req, res) => {
        Product.findOne({
            where: { id: req.query.id },
            include: [{ model: Grape }]
        }).then(product => res.json(product));
    }

    createGrape = (req, res) => {
        Product.create({ companyName: req.body.companyName, stageId: 10 }).then(product => {
            delete req.body.companyName;
            Grape.create({ ...req.body, productId: product.id }).then(grape => {
                res.json(grape);
            });
        });
    }

    updateGrape = (req, res) => {
        Product.update({ companyName: req.body.companyName }, { where: { id: req.body.id } })
            .then(product => {
                delete req.body.companyName;
                Grape.update(req.body, { where: { id: req.body.grapeId } });
                res.json(product);
            });
    }

    deleteGrape = (req, res) => {
        Grape.findOne({ where: { productId: req.params.id } }).then(grape => {
            if (grape) {
                grape.destroy({ force: true }).then(id => {
                    Product.findOne({ where: { id: req.params.id } }).then(product => {
                        if (product) {
                            product.destroy({ force: true }).then(p => {
                                res.json('done');
                            });
                        }
                    });
                });
            }
        });
    }
    transportGrape = (req, res) => {
        Grape.update({ transferred: true }, { where: { productId: req.body.id } }).then(grape => {
            Product.update({ stageId: 30 }, { where: { id: req.body.id } }).then(() => {
                res.json('Done');
            });
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
            where: { id: req.query.id },
            include: [{ model: Grape }, { model: Winery }]
        }).then(product => res.json(product));
    }

    updateWinery = (req, res) => {
        Grape.update({ actualWeight: req.body.actualWeight }, { where: { productId: req.body.id } }).then(() => {
            Winery.update({ volume: req.body.volume }, { where: { id: req.body.wineryId } }).then(winery => {
                res.json(winery);
            });
        });
    }

    createWinery = (req, res) => {
        Grape.update({ actualWeight: req.body.actualWeight }, { where: { productId: req.body.id } }).then(() => {
            Winery.create({ volume: req.body.volume, userId: req.body.userId, productId: req.body.id }).then(winery => {
                res.json(winery);
            });
        });
    }

    transportWinery = (req, res) => {
        Winery.update({ transferred: true }, { where: { productId: req.body.id } }).then(() => {
            Product.update({ stageId: 40 }, { where: { id: req.body.id } }).then(() => {
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
            where: { id: req.query.id },
            include: [{ model: Grape }, { model: Winery }, { model: Wine }]
        }).then(product => res.json(product));
    }

    updateBottler = (req, res) => {
        Wine.update(req.body, { where: { id: req.body.wineId } }).then(wine => {
            res.json(wine);
        });
    }

    createBottler = (req, res) => {
        Wine.create({ ...req.body, userId: req.body.userId, productId: req.body.id }).then(wine => {
            res.json(wine);
        });
    }

    transportBottler = (req, res) => {
        Wine.update({ transferred: true }, { where: { productId: req.body.id } }).then(() => {
            Product.update({ stageId: 60 }, { where: { id: req.body.id } }).then(() => {
                res.json('Done');
            });
        });
    }
}
