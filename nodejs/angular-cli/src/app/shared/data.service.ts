import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {ConstantService} from './constant.service';

@Injectable()
export class DataService {


  constructor(protected constantService: ConstantService) {
  }

  public getHeaders() {

    const token = this.getUser().token;
    return new Headers({'Authorization': `Bearer ${token}`});
  }

  // Get Data from success response
  protected extractData(res: any) {
    const data = res.json();
    return data || {};
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  setConection(connection) {
    localStorage.setItem('connectionSelected', connection);
  }

  setConectionName(connection) {
    localStorage.setItem('connectionSelectedName', connection);
  }

  getConection() {
    let response = localStorage.getItem('connectionSelected');
    if (!response || response.length === 0) {
      response = '';
    }
    return response;
  }

  getConectionName() {
    let response = localStorage.getItem('connectionSelectedName');
    if (!response || response.length === 0) {
      response = null;
    }
    return response;
  }

  setPinIntent(intent) {
    localStorage.setItem('pinIntent', intent);
  }

  getPinIntent() {
    return localStorage.getItem('pinIntent');
  }

  deleteUserData() {
    localStorage.removeItem('currentUser');
  }

  setRememberUser(user): void {
    localStorage.setItem('rememberedUser', JSON.stringify(user));
  }

  getRememberUser(): any {
    return JSON.parse(localStorage.getItem('rememberedUser'));
  }

  setFiltro(filtro): void {
    localStorage.setItem('filter', filtro);
  }

  getFiltro(): any {
    return localStorage.getItem('filter');
  }

  setConectionId(id): void {
    localStorage.setItem('conectionId', id);
  }

  getConectionId(): any {
    return localStorage.getItem('conectionId');
  }

  getGrocery(): any {
    return JSON.parse(localStorage.getItem('grocerySelected'));
  }

  setGrocery(location: string) {
    localStorage.setItem('grocerySelected', JSON.stringify(location));
  }

  clearLocationsCache() {
    localStorage.removeItem('connectionSelected');
    localStorage.removeItem('connectionSelectedName');
    localStorage.removeItem('filter');
    localStorage.removeItem('conectionId');
    localStorage.removeItem('grocerySelected');

  }


  setTokenRegistered(token) {
    localStorage.setItem('tokenRegistered', token);
  }

  getTokenRegistered() {
    return localStorage.getItem('tokenRegistered');
  }
}
