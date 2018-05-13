import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = true;
  roles = [];

  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.currentUser) {
      this.roles = this.authService.currentUser.roles || [];
    }
    this.router.navigate([`/home/products/${this.roles[0]}`]);
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
    return this.roles.includes('grower');
  }
  isWinery() {
    return this.roles.includes('winery');
  }
  isBottler() {
    return this.roles.includes('bottler');
  }
}
