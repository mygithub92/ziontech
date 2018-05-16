import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export abstract class AbstractAuthService {
  abstract login(credientials): Observable<boolean>;
  abstract logout(): void;
  abstract isLoggedIn(): boolean;
  abstract get currentUser(): any;
}

@Injectable()
export class AuthService implements AbstractAuthService {
  private baseUrl = 'http://18.221.40.162';

  currentUser: any;

  constructor(private http: Http) {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
   return this.http.post(this.baseUrl + '/api/authenticate', credentials)
    .map(response => {
      const result = response.json();

      if (result && result.token) {
        localStorage.setItem('token', result.token);

        const jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
        return true;
      } else { return false; }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }
}

