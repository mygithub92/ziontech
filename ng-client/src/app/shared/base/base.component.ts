import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject();

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
