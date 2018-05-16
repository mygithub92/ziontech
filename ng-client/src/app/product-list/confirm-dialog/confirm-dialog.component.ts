import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../product-list.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  product: Product;

  constructor(@Inject(MAT_DIALOG_DATA) data: Product) {
    this.product = data;
  }

  ngOnInit() {
  }

}
