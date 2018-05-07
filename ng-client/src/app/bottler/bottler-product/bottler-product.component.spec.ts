import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlerProductComponent } from './bottler-product.component';

describe('BottlerProductComponent', () => {
  let component: BottlerProductComponent;
  let fixture: ComponentFixture<BottlerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
