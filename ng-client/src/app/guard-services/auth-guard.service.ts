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

    if (this.authService.currentUser.roles && this.authService.currentUser.role === 'admin') {
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

    if (this.authService.currentUser.role === Roles.Bottler) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}

@Injectable()
export class DriverAuthGuard extends AuthGuard {

  canActivate() {
    console.log(this.authService.currentUser.roles);
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.currentUser.role === Roles.Distributor) {
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

    if (this.authService.currentUser.role === Roles.Grower) {
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

    if (this.authService.currentUser.role === Roles.Winery) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}
