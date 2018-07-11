import Product from "./model/product.model";
import Grape from "./model/grape.model";
import Transport from "./model/transport.model";
import Wine from "./model/wine.model";
import Winery from "./model/winery.model";
import Warehouse from "./model/warehouse.model";
import User from "./model/user.model";
import * as df from "dateformat";

export default class TimelineController {

    formatDate = (date: string) => {
        return df(new Date(date), 'yyyy-mm-dd');
    }

    formatDateTime = (date: string) => {
        return df(new Date(date), 'yyyy-mm-dd hh:MM:ss');
    }

    getWineJourney = (req, res) => {

        Product.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: Grape,
                    attributes: ['region', 'vineyard', 'transferDate', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Winery,
                    attributes: ['transferDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Wine,
                    attributes: ['transferDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Warehouse,
                    attributes: ['transferDate', 'creationDate', 'updatedDate'],
                    include: [{model: User}]
                },
                {
                    model: Transport,
                    attributes: ['transferDate', 'updatedDate'],
                    include: [{model: User}]
                }
            ]
        }).then((product: Product) => {
            const plainProduct = product.get({ plain: true });

            const items = new Array();
            if (plainProduct.grapes && plainProduct.grapes.length) {
                items.push({
                    title: plainProduct.grapes[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.grapes[0].creationDate),
                    icon: '/img/cd-icon-picture.svg',
                    info: [
                        { key: '', value: `Picked at ${plainProduct.grapes[0].vineyard} from ${plainProduct.grapes[0].region}` }
                    ]
                });
            }

            if (plainProduct.transports && plainProduct.transports.length > 0) {
                items.push({
                    title: plainProduct.transports[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.grapes[0].transferDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: '', value: `Transferred to ${plainProduct.transports[0].user.orgnizationName}.` },
                        { key: '', value: `Recorded on ${this.formatDateTime(plainProduct.transports[0].updatedDate)}.` }
                    ]
                });
            }

            if (plainProduct.wineries && plainProduct.wineries.length) {
                items.push({
                    title: plainProduct.wineries[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.transports[0].transferDate),
                    icon: '/img/cd-icon-location.svg',
                    info: [
                        { key: '', value: `Transferred to ${plainProduct.wineries[0].user.orgnizationName} ${plainProduct.wineries[0].user.location}.` },
                        { key: '', value: `Recorded on ${this.formatDateTime(plainProduct.wineries[0].updatedDate)}.` }
                     ]
                });
            }

            if (plainProduct.transports && plainProduct.transports.length > 1) {
                items.push({
                    title: plainProduct.transports[1].user.orgnizationName,
                    date: this.formatDate(plainProduct.wineries[0].transferDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: '', value: `Transferred to ${plainProduct.transports[1].user.orgnizationName}.` },
                        { key: '', value: `Recorded on ${this.formatDateTime(plainProduct.transports[1].updatedDate)}.` }
                    ]
                });
            }

            if (plainProduct.wines && plainProduct.wines.length) {
                items.push({
                    title: plainProduct.wines[0].user.orgnizationName,
                    date: this.formatDate(plainProduct.transports[1].transferDate),
                    icon: '/img/cd-icon-location.svg',
                    info: [
                        { key: '', value: `Transferred to ${plainProduct.wines[0].user.orgnizationName} ${plainProduct.wines[0].user.location}.` },
                        { key: '', value: `Recorded on ${this.formatDateTime(plainProduct.wines[0].updatedDate)}.` }
                    ]
                });
            }

            if (plainProduct.warehouses && plainProduct.warehouses.length) {
                items.push({
                    title: plainProduct.warehouses[0].user ? plainProduct.warehouses[0].user.orgnizationName : '',
                    date: this.formatDate(plainProduct.wines[0].transferDate),
                    icon: '/img/cd-icon-movie.svg',
                    info: [
                        { key: '', value: `The product was last recorded at ${plainProduct.warehouses[0].user.location}.` },
                        { key: '', value: `Recorded on ${this.formatDateTime(plainProduct.warehouses[0].creationDate)}.` }
                    ]
                });
            }

            res.render('index', {product: {companyName: plainProduct.companyName, items}});
        });
    }
}
