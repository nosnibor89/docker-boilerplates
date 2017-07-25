import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRouting} from 'app/app.routing';
import {AppService} from './app.service';
import {AuthService} from './auth/auth.service';
import {ConstantService} from './shared/constant.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [AppService, AuthService, ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
