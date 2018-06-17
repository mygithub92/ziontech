import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private baseUrl = 'http://18.221.40.162:5000';

  currentUser: any;

  constructor(private http: Http) {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
      console.log(this.currentUser);
    }
  }

  login(credentials) {
    return this.http.post(this.baseUrl + '/api/login', credentials)
      .map(response => {
        const result = response.json();

        if (result && result.token) {
          localStorage.setItem('token', result.token);

          const jwt = new JwtHelper();
          this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
          console.log(this.currentUser);
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

