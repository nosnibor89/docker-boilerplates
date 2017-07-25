import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitSignupComponent } from './init-signup.component';

describe('InitSignupComponent', () => {
  let component: InitSignupComponent;
  let fixture: ComponentFixture<InitSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
