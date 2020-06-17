import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPopoverComponentView } from './cart-popover-view.component';

describe('CartPopoverComponentView', () => {
  let component: CartPopoverComponentView;
  let fixture: ComponentFixture<CartPopoverComponentView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPopoverComponentView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPopoverComponentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
