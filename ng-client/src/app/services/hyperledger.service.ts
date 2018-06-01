import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

export abstract class AbstractHyperledgerService {
    abstract getAllProducts(history: boolean): Observable<any>;
    abstract getProduct(id: string): Observable<any>;
    abstract addOrUpdateProduct(data): Observable<any>;
    abstract deleteProduct(id: string): Observable<any>;
    abstract vineryUpdate(data): Observable<any>;
    abstract bottlerUpdate(data): Observable<any>;
}

@Injectable()
export class HyperledgerService implements AbstractHyperledgerService {

  constructor(private baseUrl: string, private http: Http) { }

  getAllProducts(history: boolean) {
    return this.http.get(this.baseUrl + `/api/all_products?history=${history}`)
    .map(res => res.json())
    .catch(this.handleError);
  }

  getProduct(id: string) {
    return this.http.get(this.baseUrl + `/api/all_products?id=${id}`)
    .map(res => res.json())
    .catch(this.handleError);
  }

  addOrUpdateProduct(data) {
      return this.http.post(this.baseUrl + '/api/add_update_product', data)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteProduct(id: string) {
      return this.http.delete(this.baseUrl + `/api/delete_product?id=${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  vineryUpdate(data) {
      console.log(data);
      return this.http.post(this.baseUrl + '/vinery', data)
        .map(res => res.json())
        .catch(this.handleError);
  }

  bottlerUpdate(data) {
      return this.http.post(this.baseUrl + '/bottler', data)
        .map(res => res.json())
        .catch(this.handleError);
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
