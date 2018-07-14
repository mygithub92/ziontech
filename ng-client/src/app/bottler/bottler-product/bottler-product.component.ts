import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerService } from '../../services/hyperledger.service';
import { Product, Grape } from '../../model/Product';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';
import { NoAuthError } from '../../common/no-auth-error';
import { AppValidators } from '../../shared/app.validators';

@Component({
  selector: 'app-bottler-product',
  templateUrl: './bottler-product.component.html',
  styleUrls: ['./bottler-product.component.css']
})
export class BottlerProductComponent implements OnInit {
  form: FormGroup;
  componentDestroyed$: Subject<boolean> = new Subject();
  sellers = ['Liquid Shop', 'BWS'];
  statuses = ['Bulk Wine', '12 pk boxes', '6 pk boxes'];
  corkCaps = ['Cork', 'Cap'];
  product: Product;
  grape: Grape;
  unsubscribe = new Subject<void>();

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
        brand: [null, Validators.required],
        lcode: [null, Validators.required],
        label: [null, Validators.required],
        corkCap: [null, Validators.required],
        status: [null, Validators.required],
        boxes: [null, [Validators.required, AppValidators.numberSpace]]
      }
    );

    this.form.controls.status.valueChanges
    .takeUntil(this.unsubscribe)
    .subscribe(newValue => {
      if (newValue === 'Bulk Wine') {
        this.form.removeControl('boxes');
      } else {
        this.form.addControl('boxes', new FormControl(null, [Validators.required, AppValidators.numberSpace]));
      }
    });

    this.route.params.subscribe(pamams => {
      this.service.getProduct(pamams.id)
        .takeUntil(this.componentDestroyed$)
        .subscribe(product => {
          setTimeout(() => {
            this.product = product;
            this.grape = product.grapes[0];
            this.form.patchValue(this.grape);
            if (this.product.wines && this.product.wines.length) {
              this.form.patchValue(this.product.wines[0]);
            }
          });
        }, err => {
          if (err instanceof NoAuthError) {
            this.router.navigate(['login']);
          }
        });
    });
  }

  showBoxQuestion() {
    return ['12 pk boxes', '6 pk boxes'].includes(this.form.controls.status.value);
  }

  public showCard() {
    return this.product && this.product.grapes && this.product.grapes.length;
  }

  onSubmit(data) {
    if (this.form.valid) {
      data.productId = this.product.id;
      if (this.product.wines && this.product.wines.length) {
        data['wineId'] = this.product.wines[0].id;
      }
      this.service.addOrUpdateProduct(data)
        .finally(() => this.router.navigate(['/home/products', this.authService.currentRole]))
        .subscribe(res => res);
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
