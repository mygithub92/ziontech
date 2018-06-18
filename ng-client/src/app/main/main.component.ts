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
  roles = Roles;
  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.router.navigate([`/home/products/${this.authService.currentRole}`]);
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

  navigateTo(asRole: number) {
    this.authService.currentRole = asRole;
    this.authService.transaction = false;
    this.router.navigate([`/home/products/${this.authService.currentRole}`]);
  }

  navigateToTransaction() {
    this.authService.transaction = true;
    this.router.navigate(['/home/products/transaction']);
  }
}
