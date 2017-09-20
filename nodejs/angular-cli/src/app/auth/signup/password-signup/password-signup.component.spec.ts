import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSignupComponent } from './password-signup.component';

describe('PasswordSignupComponent', () => {
  let component: PasswordSignupComponent;
  let fixture: ComponentFixture<PasswordSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
