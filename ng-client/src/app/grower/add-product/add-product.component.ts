import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractHyperledgerService } from '../../services/hyperledger.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { HyperledgerServiceProvider } from '../../services/hyperledger.service.provider';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class AddProductComponent implements OnInit {
  form;
  companies = ['Penley', 'Hoggies Estate'];

  constructor(private service: AbstractHyperledgerService, private router: Router, fb: FormBuilder) {

    this.form = fb.group(
      {
        id: ['', Validators.required],
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

  onSubmit(data) {
    if (this.form.valid) {
      this.service.addProduct(data)
      .finally(() => this.router.navigate(['/home/products', 'grower']))
      .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  ngOnInit() {
  }

}
