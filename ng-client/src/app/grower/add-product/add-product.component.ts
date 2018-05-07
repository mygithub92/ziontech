import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form;
  companies = ['Penley', 'Hoggies Estate'];

  constructor(fb: FormBuilder) {

    this.form = fb.group(
      {
        key: ['', Validators.required],
        companyName: ['', Validators.required],
        region: ['', Validators.required],
        vineyard: ['', Validators.required],
        block: ['', Validators.required],
        rowRange: ['', Validators.required],
        variety: ['', Validators.required],
        vintage: ['', Validators.required],
        dateDelivered: ['', Validators.required],
        vinery: ['', Validators.required],
        estimatedWeight: ['', Validators.required]
      }
    );
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  ngOnInit() {
  }

}
