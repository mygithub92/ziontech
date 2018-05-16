import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { AbstractHyperledgerService } from './hyperledger.service';
import { Product } from '../product-list/product-list.component';
import { AbstractAuthService } from './auth.service';

const wines = [{
    Key: '1',
    Record: {
        companyName: 'Hoggies Estate',
        region: 'Merbein',
        vineyard: 'Thompson',
        block: '2',
        rowRange: '1-3',
        variety: 'Muscat of Alexandria',
        vintage: '2018',
        dateDelivered: '2018-04-12',
        vinery: 'Trentham Estate',
        estimatedWeight: '20',
        actualWeight: '18',
        volume: '5000',
        receivedFrom: '',
        transferredTo: '',
        bottlingCompany: 'Best Bottlers',
        label: 'Hoggies',
        corkCap: '',
        status: 'Labeled',
        seller: 'Liquid Shop',
        brand: 'Vintage Reserve Shiraz'
    }
},
{
    Key: '2',
    Record: {
        companyName: 'Penley',
        region: 'Coonawarra',
        vineyard: 'Ladbroke',
        block: '3',
        rowRange: '4-10',
        variety: 'Shiraz',
        vintage: '2016',
        dateDelivered: '2017-12-23',
        vinery: 'Limestone Coast Wines',
        estimatedWeight: '35',
        actualWeight: '33',
        volume: '5600',
        receivedFrom: '',
        transferredTo: '',
        bottlingCompany: 'Liquid Goods',
        label: 'Olivias',
        corkCap: '',
        status: 'Not Labeled',
        seller: 'BWS',
        brand: 'Riesling'
    }
},
{
    Key: '3',
    Record: {
        companyName: 'Penley',
        region: 'Coonawarra',
        vineyard: 'Ladbroke',
        block: '3',
        rowRange: '4-10',
        variety: 'Shiraz',
        vintage: '2014',
        dateDelivered: '2015-10-03',
        vinery: 'Limestone Coast Wines',
        estimatedWeight: '40',
        actualWeight: '38',
        volume: '5600',
        receivedFrom: '',
        transferredTo: '',
        bottlingCompany: 'Liquid Goods',
        label: 'Olivias',
        corkCap: '',
        status: 'Not Labeled',
        seller: 'BWS',
        brand: 'Riesling',
        stages: [
            { stageId: 1001, period: { end: '2015-10-10' } }, // grape ready to delivery.
            // { stageId: 2001, period: { start: '2015-10-10' } }, // driver picks up grape.
            // { stageId: 2002, period: { start: '2015-10-10', end: '2015-10-10' } }, // driver delivers to winery.
            // { stageId: 3001, period: { start: '2015-10-10', end: '2016-03-23' } }, // brew.
            // { stageId: 4001, period: { start: '2016-03-23' } }, // driver pick up barral.
            // { stageId: 4002, period: { start: '2016-03-23', end: '2016-03-30' } }, // drop barral to bottling company.
            // { stageId: 5001, period: { start: '2016-03-30' } }, // bottler starts label.
            // { stageId: 5002, period: { start: '2016-03-30', end: '2016-05-27' } }, // bottles are labeled.
            // { stageId: 6001, period: { start: '2016-05-27' } }, // shipping to oversea.
            // { stageId: 6002, period: { start: '2016-05-27', end: '2016-07-03' } }, // ship to warehouse.
        ]
    }
}
];

const roleStageMap = {
    grower: [0, 1000],
    driver: [1001, 2000],
    winery: [2001, 3000],
    bottler: [3001, 5000],
    warehouse: [5001, 6000]
};

@Injectable()
export class MockHyperledgerService implements AbstractHyperledgerService {

    constructor(protected authService: AbstractAuthService) { }

    getHyperledgers(role) {
        let stage = roleStageMap[role];
        if (!stage) {
            const userRole = this.authService.currentUser && this.authService.currentUser.roles[0];
            stage = roleStageMap[userRole];
            stage = [...stage];
            stage[0] += 1000;
            stage[1] += 1000;
        }
        const result = wines.filter(wine => {
            let stages = wine.Record.stages;
            if (!stages) {
                stages = [{ stageId: 100, period: { end: '2015-10-10' } }];
            }
            const recordStage = stages[stages.length - 1].stageId;
            return !stages || (stage[0] < recordStage && recordStage < stage[1]);
        });
        return Observable.of(result);
    }

    addProduct(data) {
        return Observable.of(wines);
    }

    vineryUpdate(data) {
        return Observable.of(wines);
    }

    bottlerUpdate(data) {
        return Observable.of(wines);
    }
    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json));
        }

        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }

        return Observable.throw(new AppError(error));
    }
}
