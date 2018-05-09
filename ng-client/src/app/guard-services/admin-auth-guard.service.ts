import { AuthGuard } from '../auth-guard.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.currentUser.roles && this.authService.currentUser.roles.includes('admin')) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
