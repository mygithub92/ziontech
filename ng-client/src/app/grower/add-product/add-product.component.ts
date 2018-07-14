import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialog, ErrorStateMatcher } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { Subject } from 'rxjs/Subject';
import { DeleteConfirmDialogComponent } from '../../delete-confirm-dialog/delete-confirm-dialog.component';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../model/Product';
import { HyperledgerService } from '../../services/hyperledger.service';
import { NoAuthError } from '../../common/no-auth-error';
import { AppValidators } from '../../shared/app.validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  componentDestroyed$: Subject<boolean> = new Subject();

  form: FormGroup;
  companies = ['Hoggies Estate'];
  statuses = ['Grapes'];
  id: string;
  prodcut: Product;
  numberPattern = '\d+(\.\d{1,2})?';

  constructor(
    private service: HyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private authSevice: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        companyName: [null, Validators.required],
        region: [null, Validators.required],
        vineyard: [null, Validators.required],
        block: [null, Validators.required],
        rowRange: [null, Validators.required],
        variety: [null, Validators.required],
        vintage: [null, [Validators.required, AppValidators.numberSpace]],
        bins: [null, [Validators.required, AppValidators.numberSpace]],
        status: [null, Validators.required],
        estimatedWeight: [null, [Validators.required, AppValidators.float]]
      }
    );
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id && this.id !== '0') {
        this.service.getProduct(this.id)
          .takeUntil(this.componentDestroyed$)
          .subscribe(product => {
            setTimeout(() => {
              this.prodcut = product;
              this.form.patchValue(product);
              this.form.patchValue(product.grapes[0]);
            });
          }, err => {
            if (err instanceof NoAuthError) {
              this.router.navigate(['login']);
            }
          });
      }
    });
  }
  onSubmit(data) {
    if (this.form.valid) {
      if (this.prodcut) {
        data.productId = this.prodcut.id;
        if (this.prodcut.grapes || this.prodcut.grapes[0].id) {
          data.grapeId = this.prodcut.grapes[0].id;
        }
      }

      this.service.addOrUpdateProduct(data)
        .finally(() => this.router.navigate(['/home/products', this.authSevice.currentRole]))
        .subscribe(res => res);
    }
  }

  showDeleteButton() {
    return this.id && this.id !== '0';
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '550px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.service.deleteProduct('' + this.prodcut.id)
          .finally(() => this.router.navigate(['/home/products', this.authSevice.currentRole]))
          .subscribe(res => res);
      }
    });
  }

  getErrorMessage() {
    const e = this.form.controls.vintage.errors;
    return 'You must enter a value';
  }
}
