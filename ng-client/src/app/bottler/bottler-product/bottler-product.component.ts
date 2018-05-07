import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bottler-product',
  templateUrl: './bottler-product.component.html',
  styleUrls: ['./bottler-product.component.css']
})
export class BottlerProductComponent implements OnInit {
  form;
  sellers = ['Liquid Shop', 'BWS'];
  statuses = ['Labeled', 'Not Labeled'];

  constructor(fb: FormBuilder) { 
    this.form = fb.group(
      {
        brand: ['', Validators.required],
        label: ['', Validators.required],
        corkCap: ['', Validators.required],
        seller: ['', Validators.required],
        status: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
