import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {NgModule} from '@angular/core';
import {RecoveryPasswordComponent} from './recovery-password/recovery-password.component';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { InitSignupComponent } from './signup/init-signup/init-signup.component';
import { PasswordSignupComponent } from './signup/password-signup/password-signup.component';
import { PinSignupComponent } from './signup/pin-signup/pin-signup.component';

const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent}
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpModule,
    RouterModule,
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
    RecoveryPasswordComponent,
    InitSignupComponent,
    PasswordSignupComponent,
    PinSignupComponent
  ]
})
export class AuthModule {
}
