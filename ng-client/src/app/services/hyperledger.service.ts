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
import { baseUrl } from './server.url';
import { NoAuthError } from '../common/no-auth-error';

@Injectable()
export class HyperledgerService {
    private baseUrl = baseUrl;

    constructor(private http: Http, private authService: AuthService) { }

    getAllProducts(history: boolean) {
        switch (this.authService.currentRole) {
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
            case Roles.Warehouse:
                return this.http.get(`${this.baseUrl}/api/warehouse`, { params: { history } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Logistic:
                if (history) {
                    return this.http.get(`${this.baseUrl}/api/transports`, { params: { history } })
                        .map(res => {
                            const result = [];
                            res.json().forEach(product => {
                                product.transports.forEach(transport => {
                                    const temp = { ...product };
                                    delete temp.transports;
                                    temp.transports = [];
                                    temp.transports.push(transport);

                                    result.push(temp);
                                });
                            });
                            return result;
                        })
                        .catch(this.handleError);
                }
                return this.http.get(`${this.baseUrl}/api/transports`, { params: { history } })
                    .map(res => {
                        const ps = res.json();

                        ps.products.forEach(product => {
                            product.transports = product.transports || [];
                            ps.transports.forEach(transport => {
                                if (product.id === transport.productId) {
                                    product.transports.push(transport);
                                }
                            });
                        });
                        return ps.products;
                    })
                    .catch(this.handleError);
        }
    }

    getProduct(productId: string) {
        switch (this.authService.currentRole) {
            case Roles.Grower:
                return this.http.get(`${this.baseUrl}/api/grape`, { params: { productId } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Winery:
                return this.http.get(`${this.baseUrl}/api/winery`, { params: { productId } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Bottler:
                return this.http.get(`${this.baseUrl}/api/bottler`, { params: { productId } })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Logistic:
                return this.http.get(`${this.baseUrl}/api/transport`, { params: { productId } })
                    .map(res => {
                        const ps = res.json();
                        if (ps.transport) {
                            ps.product.transports = [];
                            ps.product.transports.push(ps.transport);
                        }
                        return ps.product;
                    })
                    .catch(this.handleError);
        }

    }

    addOrUpdateProduct(data) {
        data.userId = this.authService.currentUser.id;
        switch (this.authService.currentRole) {
            case Roles.Grower:
                if (data.productId) {
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
            case Roles.Logistic:
                if (data.transportId) {
                    return this.http.post(this.baseUrl + '/api/transport/update/', data)
                        .map(res => res.json())
                        .catch(this.handleError);
                } else {
                    return this.http.put(this.baseUrl + '/api/transport/create', data)
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

    transportProduct(productId: string, data?: any) {
        switch (this.authService.currentRole) {
            case Roles.Grower:
                return this.http.post(this.baseUrl + '/api/grape/transport', { productId })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Winery:
                return this.http.post(this.baseUrl + '/api/winery/transport', { productId })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Bottler:
                return this.http.post(this.baseUrl + '/api/bottler/transport', { productId })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Warehouse:
                return this.http.post(this.baseUrl + '/api/warehouse/transport', { productId })
                    .map(res => res.json())
                    .catch(this.handleError);
            case Roles.Logistic:
                return this.http.post(this.baseUrl + '/api/transport/transport', { productId })
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

        if (error.status === 401) {
            return Observable.throw(new NoAuthError(error));
        }
        return Observable.throw(new AppError(error));
    }
}
