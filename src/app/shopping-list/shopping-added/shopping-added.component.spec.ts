import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAddedComponent } from './shopping-added.component';

describe('ShoppingAddedComponent', () => {
  let component: ShoppingAddedComponent;
  let fixture: ComponentFixture<ShoppingAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
