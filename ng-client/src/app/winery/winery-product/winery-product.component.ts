import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractHyperledgerService } from '../../services/hyperledger.service';
import { HyperledgerServiceProvider } from '../../services/hyperledger.service.provider';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-winery-product',
  templateUrl: './winery-product.component.html',
  styleUrls: ['./winery-product.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class WineryProductComponent implements OnInit {

  form;
  bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];
  id: string;
  componentDestroyed$: Subject<boolean> = new Subject();
  product: Product = new Object() as Product;

  constructor(
    private service: AbstractHyperledgerService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  onSubmit(data) {
    if (this.form.valid) {
      data.key = this.id;
      const obj = {
        _id: this.id,
        productId: this.product.product,
        actualWeight: data.actualWeight,
        winery: {
          volume: data.volume,
          bottler: data.bottler
        }
      };
      if (this.product.winery) {
        obj.winery._id = this.product.winery._id;
      }
      this.service.addOrUpdateProduct(obj)
        .finally(() => this.router.navigate(['/home/products', 'winery']))
        .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  ngOnInit() {

    this.form = this.fb.group(
      {
        actualWeight: ['', Validators.required],
        volume: ['', Validators.required],
        bottler: ['', Validators.required]
      }
    );

    this.route.params.subscribe(pamams => {
      this.id = pamams.id;
      if (this.id && this.id !== '0') {
        this.service.getProduct(this.id)
          .takeUntil(this.componentDestroyed$)
          .subscribe(product => {
            setTimeout(() => {
              this.product = product;
              this.form.patchValue(product);
              if (product.winery) {
                this.form.patchValue(product.winery);
              }
            });
          });
      }
    });
  }

}
