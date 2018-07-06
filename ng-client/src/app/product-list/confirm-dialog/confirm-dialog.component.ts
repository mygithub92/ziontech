import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  product: Product;

  constructor(@Inject(MAT_DIALOG_DATA) data: Product) {
    this.product = data;
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
}
