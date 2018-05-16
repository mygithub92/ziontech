import { AbstractAuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceProvider } from '../services/auth.service.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceProvider]
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AbstractAuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/home']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}
