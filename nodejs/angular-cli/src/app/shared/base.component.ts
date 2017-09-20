import {Router} from '@angular/router';

export class BaseComponent {

  public errorMessage: string;
  public isLoading = false;
  public maskTlf = ['+', /\d/, /\d/, ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(protected router: Router) {
  }

  public handlerError(error) {
    this.isLoading = false;
    if (error.error) {
      if (error.error.code === 401) {
        this.router.navigate(['/expired-session']);
      } else {
        this.errorMessage = error.error.message;
      }
    } else {
      this.errorMessage = 'Ha ocurrido un error inesperado por favor intentelo mas tarde';
    }
  }
}
