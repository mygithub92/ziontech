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
    abstract getHyperledgers(role): Observable<any>;
    abstract addProduct(data): Observable<any>;
    abstract vineryUpdate(data): Observable<any>;
    abstract bottlerUpdate(data): Observable<any>;
}

@Injectable()
export class HyperledgerService implements AbstractHyperledgerService {

  constructor(private baseUrl: string, private http: Http) { }

  getHyperledgers(role) {
    return this.http.get(this.baseUrl + '/get_all_wine')
    .map(res => res.json())
    .catch(this.handleError);
  }

  addProduct(data) {
      return this.http.post(this.baseUrl + '/add_wine', data)
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
