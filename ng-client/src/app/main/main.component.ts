import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Router } from '@angular/router';
import { AbstractAuthService } from '../services/auth.service';
import { AuthServiceProvider } from '../services/auth.service.provider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [AuthServiceProvider]

})
export class MainComponent implements OnInit {
  isCollapsed = true;
  role;

  constructor(private dialog: MatDialog, private router: Router, private authService: AbstractAuthService) { }

  ngOnInit() {
    if (this.authService.currentUser) {
      this.role = this.authService.currentUser.role;
    }
    this.router.navigate([`/home/products/${this.role}`]);
  }

  openDialog() {
    this.dialog.open(QrDialogComponent, {
      data: {
        courseId: 1
      }
    }).afterClosed()
      .subscribe(result => console.log(result));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  isGrower() {
    return this.role === 'grower';
  }
  isWinery() {
    return this.role === 'winery';
  }
  isBottler() {
    return this.role === 'bottler';
  }
  isDriver1() {
    return this.role === 'driver1';
  }
}
