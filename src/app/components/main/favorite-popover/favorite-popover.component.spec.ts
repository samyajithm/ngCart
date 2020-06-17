import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePopoverComponent } from './favorite-popover.component';

describe('FavoritePopoverComponent', () => {
  let component: FavoritePopoverComponent;
  let fixture: ComponentFixture<FavoritePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
