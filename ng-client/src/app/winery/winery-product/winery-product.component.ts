import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-winery-product',
  templateUrl: './winery-product.component.html',
  styleUrls: ['./winery-product.component.css']
})
export class WineryProductComponent implements OnInit {

  form;
  bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];

  constructor(fb: FormBuilder) { 
    this.form = fb.group(
      {
        actualWeight: ['', Validators.required],
        volume: ['', Validators.required],
        bottlingCompany: ['', Validators.required]
      }
    );
  }


  getErrorMessage() {
    return 'You must enter a value';
  }
  
  ngOnInit() {
  }

}
