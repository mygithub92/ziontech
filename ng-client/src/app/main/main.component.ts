import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Roles } from '../shared/Roles.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = true;
  role;

  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService) { }

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
    return this.role === Roles.Grower;
  }
  isWinery() {
    return this.role === Roles.Winery;
  }
  isBottler() {
    return this.role === Roles.Bottler;
  }
  isDriver1() {
    return this.role === Roles.Distributor;
  }
}
