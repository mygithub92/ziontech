import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineryProductComponent } from './winery-product.component';

describe('WineryProductComponent', () => {
  let component: WineryProductComponent;
  let fixture: ComponentFixture<WineryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
