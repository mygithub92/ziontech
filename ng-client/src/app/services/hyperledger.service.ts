import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable()
export class HyperledgerService {

  private baseUrl = 'http://ziontech.com:5000';

  constructor(private http: Http) { }

  getHyperledgers() {
    return this.http.get(this.baseUrl + '/get_all_wine')
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
