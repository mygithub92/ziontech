import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HyperledgerService } from '../services/hyperledger.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  form;
  selectedId: string;

  constructor(
    private service: HyperledgerService,
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
      // this.service.bottlerUpdate({key: this.selectedId, ...data})
      // .finally(() => this.router.navigate(['/home/products', 'driver1']))
      // .subscribe(res => console.log(res));
    }
  }

  getErrorMessage() {
    return 'You must enter a value';
  }


  ngOnInit() {
  }

}
