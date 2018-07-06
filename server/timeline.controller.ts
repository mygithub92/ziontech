import Product from "./model/product.model";
import Grape from "./model/grape.model";
import Transport from "./model/transport.model";
import Wine from "./model/wine.model";
import Winery from "./model/winery.model";
import Warehouse from "./model/warehouse.model";
import User from "./model/user.model";
import * as df from "dateformat";

export default class TimelineController {
    pattern = 'yyyy-mm-dd';

    formatDate = (date: string) => {
        return df(new Date(date), this.pattern);
    }

    getWineJourney = (req, res) => {

        Product.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: Grape,
                    attributes: ['region', 'vineyard', 'variety', 'vintage', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Winery,
                    attributes: ['volume', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Wine,
                    attributes: ['brand', 'boxes', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Warehouse,
                    attributes: ['remaining', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Transport,
                    attributes: ['driverId', 'plateNumber', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                }
            ],
            attributes: ['companyName']
        }).then((product: Product) => {
            const plainProduct = product.get({ plain: true });

            const items = new Array();
            if (plainProduct.grapes && plainProduct.grapes.length) {
                items.push({
                    title: plainProduct.grapes[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.grapes[0].creationDate),
                    icon: '/img/cd-icon-picture.svg',
                    info: [
                        { key: '', value: plainProduct.grapes[0].user.location + ', ' + plainProduct.grapes[0].region + ', ' + plainProduct.grapes[0].vineyard }
                    ]
                });
            }

            if (plainProduct.transports && plainProduct.transports.length > 0) {
                items.push({
                    title: plainProduct.transports[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.transports[0].creationDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: 'Driver Id', value: plainProduct.transports[0].driverId },
                        { key: 'Plate Number', value: plainProduct.transports[0].plateNumber }
                    ]
                });
            }

            if (plainProduct.wineries && plainProduct.wineries.length) {
                items.push({
                    title: plainProduct.wineries[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.wineries[0].creationDate),
                    icon: '/img/cd-icon-location.svg',
                    info: [
                        { key: 'Volume', value: plainProduct.wineries[0].user.location }
                    ]
                });
            }

            if (plainProduct.transports && plainProduct.transports.length > 1) {
                items.push({
                    title: plainProduct.transports[1].user.orgnizationName,
                    date: this.formatDate(plainProduct.transports[1].creationDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: 'Driver Id', value: plainProduct.transports[1].driverId },
                        { key: 'Plate Number', value: plainProduct.transports[1].plateNumber }
                    ]
                });
            }

            if (plainProduct.wines && plainProduct.wines.length) {
                items.push({
                    title: plainProduct.wines[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.wines[0].creationDate),
                    icon: '/img/cd-icon-location.svg',
                    info: [
                        { key: 'Number of box', value: plainProduct.wines[0].user.location }
                    ]
                });
            }

            if (plainProduct.transports && plainProduct.transports.length > 2) {
                items.push({
                    title: plainProduct.transports[2].user.orgnizationName,
                    date: this.formatDate(plainProduct.transports[2].creationDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: 'Driver Id', value: plainProduct.transports[2].driverId },
                        { key: 'Plate Number', value: plainProduct.transports[2].plateNumber }
                    ]
                });
            }

            if (plainProduct.warehouses && plainProduct.warehouses.length) {
                items.push({
                    title: plainProduct.warehouses[0].user ? plainProduct.warehouses[0].user.orgnizationName : '',
                    date: this.formatDate(plainProduct.warehouses[0].creationDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: 'Number of box', value: plainProduct.warehouses[0].user ? plainProduct.warehouses[0].user.location : ''}
                    ]
                });
            }

            res.render('index', {product: {companyName: plainProduct.companyName, brand: plainProduct.wines[0].brand, items}});
        });
    }
}
