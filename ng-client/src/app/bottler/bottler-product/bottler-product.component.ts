import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { HyperledgerService } from '../../services/hyperledger.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottler-product',
  templateUrl: './bottler-product.component.html',
  styleUrls: ['./bottler-product.component.css']
})
export class BottlerProductComponent implements OnInit {
  form;
  selectedId: string;
  sellers = ['Liquid Shop', 'BWS'];
  statuses = ['Labeled', 'Not Labeled'];

  constructor(
    private service: HyperledgerService,
    private router: Router,
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.route.params.subscribe(pamams => this.selectedId = pamams.id);
    this.form = fb.group(
      {
        brand: ['', Validators.required],
        label: ['', Validators.required],
        corkCap: ['', Validators.required],
        seller: ['', Validators.required],
        status: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this.service.bottlerUpdate({key: this.selectedId, ...data})
    .finally(() => this.router.navigate(['/home/products', 'bottler']))
    .subscribe(res => console.log(res));
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
