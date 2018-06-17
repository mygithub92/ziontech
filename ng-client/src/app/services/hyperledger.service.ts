import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Roles } from '../shared/Roles.enum';
import { AuthService } from './auth.service';

@Injectable()
export class HyperledgerService {
    private baseUrl = 'http://18.221.40.162:5000';

    constructor(private http: Http, private authService: AuthService) { }

    getAllProducts(history: boolean) {
        switch (this.authService.currentUser.role) {
            case Roles.Grower:
                return this.http.get(`${this.baseUrl}/api/grapes`, { params: { history } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Winery:
                return this.http.get(`${this.baseUrl}/api/wineries`, { params: { history } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Bottler:
                return this.http.get(`${this.baseUrl}/api/bottlers`, { params: { history } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Distributor:
                return this.http.get(`${this.baseUrl}/api/grapes`, { params: { history } })
                    .map(res => res.json())
                    .catch(this.handleError);
        }
    }

    getProduct(id: string) {
        switch (this.authService.currentUser.role) {
            case Roles.Grower:
                return this.http.get(`${this.baseUrl}/api/grape`, { params: { id } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Winery:
                return this.http.get(`${this.baseUrl}/api/winery`, { params: { id } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Bottler:
                return this.http.get(`${this.baseUrl}/api/bottler`, { params: { id } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Distributor:
                return this.http.get(`${this.baseUrl}/api/grape`, { params: { id } })
                    .map(res => res.json())
                    .catch(this.handleError);
        }

    }

    addOrUpdateProduct(data) {
        data.userId = this.authService.currentUser.sub;
        console.log(data);
        switch (this.authService.currentUser.role) {
            case Roles.Grower:
                if (data.id) {
                    return this.http.post(this.baseUrl + '/api/grape/update/', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                } else {
                    return this.http.put(this.baseUrl + '/api/grape/create', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                }
            case Roles.Winery:
                if (data.wineryId) {
                    return this.http.post(this.baseUrl + '/api/winery/update/', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                } else {
                    return this.http.put(this.baseUrl + '/api/winery/create', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                }
            case Roles.Bottler:
                if (data.wineId) {
                    return this.http.post(this.baseUrl + '/api/bottler/update/', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                } else {
                    return this.http.put(this.baseUrl + '/api/bottler/create', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                }

        }
    }

    deleteProduct(id: string) {
        return this.http.delete(this.baseUrl + `/api/grape/${id}`)
            .map(res => res.json())
            .catch(this.handleError);
    }

    transportProduct(id: string) {
        console.log(id);
        switch (this.authService.currentUser.role) {
            case Roles.Grower:
                return this.http.post(this.baseUrl + '/api/grape/transport', { id })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Winery:
                return this.http.post(this.baseUrl + '/api/winery/transport', { id })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Bottler:
                return this.http.post(this.baseUrl + '/api/bottler/transport', { id })
                    .map(res => res.json())
                    .catch(this.handleError);

        }
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
