import { Injectable } from '@angular/core';
import { AuthGuard } from '../auth-guard.service';

@Injectable()
export class GrowerAuthGuardService extends AuthGuard {

  canActivate() {
    const isAuthenticated = super.canActivate();
    if (!isAuthenticated) {
      return false;
    }

    if (this.authService.currentUser.roles.includes('grower')) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}

