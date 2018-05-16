import { AuthService, AbstractAuthService } from '../services/auth.service';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceProvider } from '../services/auth.service.provider';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(protected router: Router, protected authService: AbstractAuthService) { }

  canActivate() {
    if (this.authService.isLoggedIn()) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}

