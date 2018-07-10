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
    return this.product.transferDate instanceof Date && this.product.transferTo !== undefined;
  }

  get startDate() {
    return new Date();
  }

}
