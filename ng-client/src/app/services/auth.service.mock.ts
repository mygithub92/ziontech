import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AbstractAuthService } from './auth.service';

@Injectable()
export class MockAuthService implements AbstractAuthService {

  currentUser: any;

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {

    const grower = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJncm93ZXIiXX0.eviyhhozzaTslk_6aHioIQN_v31qKKsGZdgFmACUNJk';
    const winery = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJ3aW5lcnkiXX0.L0-W5maUJCJTuXaa2xZFEBbIdC5Q_F9tktbN-LAaOBw';
    const bottler = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJib3R0bGVyIl19.28BySzyeN_Anu4aEpHSfxoR1H6OrZf1XfEa-s5n-WuA';
    const full = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJncm93ZXIiLCJ3aW5lcnkiLCJib3R0bGVyIl19.dc4tIMMYcJPb9g5h9fiGbxMRdlNzjWLwsGJ-uWVTQXw';
    const body = credentials;
    let token;
    if (body.password === '1234') {
      if (body.email === 'grower@ziontech.com') {
        token = grower;
      }
      if (body.email === 'winery@ziontech.com') {
        token = winery;
      }
      if (body.email === 'bottler@ziontech.com') {
        token = bottler;
      }
      if (body.email === 'owner@ziontech.com') {
        token = full;
      }
    }
    localStorage.setItem('token', token);
    return Observable.of(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }
}

