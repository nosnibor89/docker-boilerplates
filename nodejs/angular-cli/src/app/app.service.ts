import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor() {
  }

  /**
   * Save in local storage signin info for user.
   *
   * @param {any} user
   *
   * @memberof DataService
   */
  setIsAuthorization(isAuthorization): void {
    localStorage.setItem('isAuthorization', isAuthorization);
  }

  /**
   * Get signin info for user in local storage.
   *
   * @memberof DataService
   */
  isAuthorization(): any {
    return JSON.parse(localStorage.getItem('isAuthorization'));
  }
}


