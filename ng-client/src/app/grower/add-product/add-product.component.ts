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
import { DeleteConfirmDialogComponent } from '../../delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';

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
  id: string;

  constructor(
    private service: AbstractHyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
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
      this.id = params['id'];
      if (this.id && this.id !== '0') {
        this.service.getProduct(this.id)
          .takeUntil(this.componentDestroyed$)
          .subscribe(product => {
            setTimeout(() => {
              this.form.patchValue(product);
            });
          });
      }
    });


  }
  onSubmit(data) {
    if (this.form.valid) {
      if (this.id !== '0') {
        data._id = this.id;
      }
      this.service.addOrUpdateProduct(data)
        .finally(() => this.router.navigate(['/home/products', 'grower']))
        .subscribe(res => console.log(res));
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
        this.service.deleteProduct(this.id)
          .finally(() => this.router.navigate(['/home/products', 'grower']))
          .subscribe(res => {
            console.log(res);
          });
      }
    });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
