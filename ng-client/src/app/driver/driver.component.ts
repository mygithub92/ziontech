import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractHyperledgerService } from '../services/hyperledger.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerServiceProvider } from '../services/hyperledger.service.provider';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class DriverComponent implements OnInit {
  form;
  selectedId: string;

  constructor(
    private service: AbstractHyperledgerService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder) {
    this.route.params.subscribe(pamams => this.selectedId = pamams.id);

    this.form = fb.group(
      {
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        truck: ['', Validators.required]
      }
    );
  }

  onSubmit(data) {
    if (this.form.valid) {
      this.service.bottlerUpdate({key: this.selectedId, ...data})
      .finally(() => this.router.navigate(['/home/products', 'driver1']))
      .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }


  ngOnInit() {
  }

}
