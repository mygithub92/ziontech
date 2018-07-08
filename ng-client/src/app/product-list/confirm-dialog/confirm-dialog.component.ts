import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Product } from '../../model/Product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public product: Product) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isValid(): boolean {
    return this.product.transferDate instanceof Date;
  }

  get remainingBoxNumber() {
    if (this.showBoxNumber()) {
      return 10;
    }
    return 0;
  }

  showBoxNumber() {
    return this.product.wines && this.product.wines[0] && this.product.wines[0].boxes;
  }

  get startDate() {
    return new Date();
  }

  get minDate() {
    return new Date();
  }
}
