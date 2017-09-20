import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  successMessage: string;
  isLoading = false;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    const user = authService.getRememberUser();
    this.form = this.fb.group({
      'username': [user ? user.username : null, Validators.required],
      'password': [user ? user.password : null, Validators.required],
      'rememberMe': [user ? true : false, null]
    });
  }

  ngOnInit() {
  }

  login() {

    this.isLoading = true;
    this.errorMessage = '';
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    const rememberMe = this.form.get('rememberMe').value;
    this.authService.login(username, password, rememberMe)
      .then((res) => {
        if (res) {

          this.router.navigate(['/app']);
        }
      })
      .catch((err) => {
        if (err.error) {
          this.errorMessage = err.error.message;
        } else {
          console.log('Ha ocurrido un error en el login', err);
          this.errorMessage = 'Ha ocurrido un error un error inesperado';
        }
        this.isLoading = false;
      });
  }
}
