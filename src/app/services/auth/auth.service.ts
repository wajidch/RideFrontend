import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpResponse } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private headers = new HttpHeaders();
  private API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    this.headers.set("Access-Control-Allow-Origin", "*");
  }



  // ------------------------------
  // ---------- POST --------------
  // ------------------------------
  // API: POST /objType/add/{action}

  public login(username: string, password: string): any {
    let params = new HttpParams();
    this.headers.set("Access-Control-Allow-Origin", "*");
    this.headers.set('Access-Control-Allow-Methods', 'POST');
    this.headers.set('observe', 'body');

     return this.httpClient.post(this.API_URL + 'login', { "username": username, "password": password }, { responseType: 'text' })
      .subscribe(
        data => {
          localStorage.setItem('token', data)
          localStorage.setItem('error', null);
          localStorage.setItem('status', "200");
          localStorage.setItem('redirectTo', "/dashboard");
        },
        err => {
          localStorage.setItem('token', null)
          localStorage.setItem('error', err.error);
          localStorage.setItem('status', err.status);
          localStorage.setItem('redirectTo', null);
        }
      );
  }



  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
    return true;
  }


}
