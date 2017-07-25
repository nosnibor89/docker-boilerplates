import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinSignupComponent } from './pin-signup.component';

describe('PinSignupComponent', () => {
  let component: PinSignupComponent;
  let fixture: ComponentFixture<PinSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
