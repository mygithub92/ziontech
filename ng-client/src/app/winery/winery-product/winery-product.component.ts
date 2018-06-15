import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Product, Grape } from '../../model/Product';
import { HyperledgerService } from '../../services/hyperledger.service';

@Component({
  selector: 'app-winery-product',
  templateUrl: './winery-product.component.html',
  styleUrls: ['./winery-product.component.css']
})
export class WineryProductComponent implements OnInit {

  form;
  bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];
  componentDestroyed$: Subject<boolean> = new Subject();
  product: Product = new Object() as Product;
  grape: Grape;
  constructor(
    private service: HyperledgerService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    this.form = this.fb.group(
      {
        actualWeight: ['', Validators.required],
        volume: ['', Validators.required]
      }
    );

    this.route.params.subscribe(pamams => {
        this.service.getProduct(pamams.id)
          .takeUntil(this.componentDestroyed$)
          .subscribe(product => {
            setTimeout(() => {
              console.log(product);
              this.product = product;
              this.grape = product.grapes[0];
              this.form.patchValue(this.grape);
              if (this.product.wineries && this.product.wineries.length) {
                this.form.patchValue(this.product.wineries[0]);
              }
            });
          });
    });
  }

  public showCard() {
    return this.product && this.product.grapes && this.product.grapes.length;
  }

  onSubmit(data) {
    if (this.form.valid) {
      const obj = {
        id: this.product.id,
        actualWeight: data.actualWeight,
        volume: data.volume
      };

      if (this.product.wineries && this.product.wineries.length) {
        obj['wineryId'] = this.product.wineries[0].id;
      }
      this.service.addOrUpdateProduct(obj)
        .finally(() => this.router.navigate(['/home/products', 'winery']))
        .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

}
