import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { baseUrl } from './server.url';
import { Roles } from '../shared/Roles.enum';

@Injectable()
export class AuthService {
  private baseUrl = baseUrl;

  currentUser: { id: number, name: string, roles: { id: number, name: string }[], roleIds: number[], roleMap: Map<number, string> };
  currentRole;
  transaction;

  constructor(private http: Http) {
    const token = localStorage.getItem('token');
    if (token) {
      const jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
      this.populateUserInfor();
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
          this.populateUserInfor();
          return true;
        } else { return false; }
      });
  }

  private populateUserInfor() {
    console.log(this.currentUser);
    this.currentUser.roleMap = new Map();
    this.currentUser.roleIds = this.currentUser.roles.map(role => {
      this.currentUser.roleMap.set(role.id, role.name);
      return role.id;
    });
    this.currentRole = this.currentUser.roleIds[0];

  }

  isAuth(roleId: number) {
    return this.currentUser && this.currentUser.roleIds && this.currentUser.roleIds.includes(roleId);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  currentRoleName() {
    if (this.currentRole && this.currentUser.roleMap && this.currentUser.roleMap.size > 1) {
      const roleName = this.currentUser.roleMap.get(this.currentRole);
      return roleName;
    }
    return '';
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }
}

