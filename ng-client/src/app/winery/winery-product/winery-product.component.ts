import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractHyperledgerService } from '../../services/hyperledger.service';
import { HyperledgerServiceProvider } from '../../services/hyperledger.service.provider';

@Component({
  selector: 'app-winery-product',
  templateUrl: './winery-product.component.html',
  styleUrls: ['./winery-product.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class WineryProductComponent implements OnInit {

  form;
  bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];
  selectedId: string;

  constructor(
      private service: AbstractHyperledgerService,
      private router: Router,
      private route: ActivatedRoute,
      fb: FormBuilder
    ) {
      this.route.params.subscribe(pamams => this.selectedId = pamams.id);

    this.form = fb.group(
      {
        actualWeight: ['', Validators.required],
        volume: ['', Validators.required],
        bottlingCompany: ['', Validators.required]
      }
    );
  }

  onSubmit(data) {
    if (this.form.valid) {
      data.key = this.selectedId;
      this.service.vineryUpdate({key: this.selectedId, ...data})
      .finally(() => this.router.navigate(['/home/products', 'winery']))
      .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  ngOnInit() {
  }

}
