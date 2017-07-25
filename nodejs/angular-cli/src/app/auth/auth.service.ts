import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../shared/data.service';
import {ConstantService} from '../shared/constant.service';
import {Headers} from '@angular/http';

@Injectable()

export class AuthService extends DataService {

  url: string;

  constructor(private http: Http,
              constantService: ConstantService) {
    super(constantService);
  }


  /**
   * Login user. Send request to API endpoint
   *
   * @param {string} username
   * @param {string} password
   * @param {boolean} rememberMe
   * @returns {Promise<any>}
   *
   * @memberof AuthService
   */
  login(username, password, rememberMe): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.post(`${this.constantService.getUrlApi()}/auth`, {username: username, password: password})
        .toPromise()
        .then(res => {
          // Remember user if selected
          if (rememberMe) {
            this.setRememberUser({username: username, password: password});
          } else {
            this.setRememberUser(null);
          }
          const user = res.json().user;
          user.token = res.json().token;
          this.setUser(user);
          resolve(true);

        })
        .catch(error => {
          return reject(error.json());
        });
    });
  }


  /**
   * Register user. Send request to API endpoint
   *
   * @param {User} user
   * @returns {Promise<any>}
   *
   * @memberof AuthService
   */
  register(user): Promise<any> {

    return null;
  }

  /**
   * Recovery user's password. Send Request to API endpoint
   * @param email user's email
   */
  recoveryPassword(email) {
    return null;
  }


  /**
   * Recovery user's password. Send Request to API endpoint
   * @param info user's email
   */
  resetPassword(password, confirmPassword, key) {
    return null;

  }

  /**
   * Logs out the user. Empty memory and other things.
   *
   */
  logout() {
  }
}


