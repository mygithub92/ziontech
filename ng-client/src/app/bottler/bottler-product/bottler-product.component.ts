import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerService } from '../../services/hyperledger.service';
import { Product, Grape } from '../../model/Product';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bottler-product',
  templateUrl: './bottler-product.component.html',
  styleUrls: ['./bottler-product.component.css']
})
export class BottlerProductComponent implements OnInit {
  form;
  componentDestroyed$: Subject<boolean> = new Subject();
  sellers = ['Liquid Shop', 'BWS'];
  statuses = ['Labeled', 'Not Labeled'];
  product: Product;
  grape: Grape;

  constructor(
    private service: HyperledgerService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        brand: ['', Validators.required],
        label: ['', Validators.required],
        corkCap: ['', Validators.required],
        status: ['', Validators.required]
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
            if (this.product.wines && this.product.wines.length) {
              this.form.patchValue(this.product.wines[0]);
            }
          });
        });
    });
  }

  public showCard() {
    return this.product && this.product.grapes && this.product.grapes.length;
  }

  onSubmit(data) {
    console.log('---------------');
    if (this.form.valid) {
      data.id = this.product.id;
      if (this.product.wines && this.product.wines.length) {
        data['wineId'] = this.product.wines[0].id;
      }
      this.service.addOrUpdateProduct(data)
        .finally(() => this.router.navigate(['/home/products', this.authService.currentRole]))
        .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
