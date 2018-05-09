import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private authService: AuthService) { }

  ngOnInit() {
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
}
