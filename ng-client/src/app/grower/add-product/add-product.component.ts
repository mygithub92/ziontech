import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractHyperledgerService } from '../../services/hyperledger.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/finally';
import { Observable } from 'rxjs/Observable';
import { HyperledgerServiceProvider } from '../../services/hyperledger.service.provider';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../model/Product';
import { ProductListComponent } from '../../product-list/product-list.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class AddProductComponent implements OnInit {
  componentDestroyed$: Subject<boolean> = new Subject();

  form;
  companies = ['Penley', 'Hoggies Estate'];

  constructor(
    private service: AbstractHyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        companyName: ['', Validators.required],
        region: ['', Validators.required],
        vineyard: ['', Validators.required],
        block: ['', Validators.required],
        rowRange: ['', Validators.required],
        variety: ['', Validators.required],
        vintage: ['', Validators.required],
        estimatedWeight: ['', Validators.required]
      }
    );
    this.route.params.subscribe(params => {
      if (params['id'] && params['id'] !== '0') {
        this.service.getProduct(params['id'])
          .takeUntil(this.componentDestroyed$)
          .subscribe(products => {
            products[0].companyName = products[0].product.companyName;
            setTimeout(() => {
              this.form.patchValue(products[0]);
            });
          });
      }
    });


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
}
