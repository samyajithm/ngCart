import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractProductComponent } from './abstract-product.component';

describe('AbstractProductComponent', () => {
  let component: AbstractProductComponent;
  let fixture: ComponentFixture<AbstractProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
