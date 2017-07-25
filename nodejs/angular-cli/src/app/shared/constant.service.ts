import { Injectable } from '@angular/core';
/**
 * Class representing all constant in app
 */

@Injectable()
export class ConstantService {

  URL_API = 'http://192.168.99.100:1337/v1';
  API_TOKEN = 'Bearer d23101e42a83488ccedff469f11d79e8fc757dcc115f80a5d004774d95857486';

  getUrlApi() {
    return this.URL_API;
  }

}
