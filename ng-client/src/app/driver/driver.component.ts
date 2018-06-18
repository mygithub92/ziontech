import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerService } from '../services/hyperledger.service';
import { Subject } from 'rxjs/Subject';
import { Grape, Product } from '../model/Product';
import { AuthService } from '../services/auth.service';

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
  constructor(
    private service: HyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {}


  ngOnInit() {
    this.form = this.fb.group(
      {
        from: ['', Validators.required],
        to: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
        driverId: ['', Validators.required],
        plateNumber: ['', Validators.required],
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
            if (this.product.transports && this.product.transports.length) {
              this.form.patchValue(this.product.transports[0]);
            }
          });
        });
    });

  }
  public showCard() {
    return this.product && this.product.grapes && this.product.grapes.length;
  }

  onSubmit(data) {
    console.log(this.product);
    if (this.form.valid) {
      data.id = this.product.id;
      if (this.product.transports && this.product.transports.length) {
        data['transportId'] = this.product.transports[0].id;
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
