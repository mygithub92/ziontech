import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerService } from '../services/hyperledger.service';
import { Subject } from 'rxjs/Subject';
import { Grape, Product } from '../model/Product';
import { AuthService } from '../services/auth.service';
import { NoAuthError } from '../common/no-auth-error';
import { Roles } from '../shared/Roles.enum';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  form;
  selectedId: string;
  componentDestroyed$: Subject<boolean> = new Subject();
  grape: Grape;
  product: Product;
  roles = Roles;

  constructor(
    private service: HyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {}


  ngOnInit() {
    this.form = this.fb.group(
      {
        driverId: ['', Validators.required],
        plateNumber: ['', Validators.required],
      }
    );

    this.route.params.subscribe(pamams => {
      this.service.getProduct(pamams.id)
        .takeUntil(this.componentDestroyed$)
        .subscribe(product => {
          setTimeout(() => {
            this.product = product;
            this.grape = product.grapes[0];
            this.form.patchValue(this.grape);
            if (this.product.transports && this.product.transports.length) {
              this.form.patchValue(this.product.transports[0]);
            }
          });
        }, err => {
          if (err instanceof NoAuthError) {
            this.router.navigate(['login']);
          }
        });
    });

  }
  public showCard() {
    return this.product && this.product.grapes && this.product.grapes.length;
  }

  onSubmit(data) {
    data.productId = this.product.id;
    if (this.form.valid) {
      if (this.product.transports && this.product.transports.length) {
        data['transportId'] = this.product.transports[0].id;
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
