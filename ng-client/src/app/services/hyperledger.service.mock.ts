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
}];

@Injectable()
export class HyperledgerService {

  constructor() { }

  getHyperledgers() {
    return Observable.of(wines);
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
