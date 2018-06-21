import { AuthService } from '../services/auth.service';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Roles } from '../shared/Roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(protected router: Router, protected authService: AuthService) { }

  canActivate() {
    if (this.authService.isLoggedIn()) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.currentUser.roleIds) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}


@Injectable()
export class BottlerAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.isAuth(Roles.Bottler)) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}

@Injectable()
export class DriverAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.isAuth(Roles.Logistic)) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}

@Injectable()
export class GrowerAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.isAuth(Roles.Grower)) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}


@Injectable()
export class WineryAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.isAuth(Roles.Winery)) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}
