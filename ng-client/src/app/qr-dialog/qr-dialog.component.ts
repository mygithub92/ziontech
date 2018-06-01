import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.css']
})
export class QrDialogComponent {

  imagePath: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.imagePath = `assets/qr/qr${data.id}.png`;
   }
}
