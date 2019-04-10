
// JavaScript source code
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  sideMenu: boolean = false;
  header: boolean = true;
  //ApiBaseUrl = 'https://localhost:44318/';
  ApiBaseUrl = 'http://151.80.136.199:8080/'
 

}
//for local environment
//export const ApiBaseUrl = 'https://localhost:44318/';
export const ApiBaseUrl = 'http://151.80.136.199:8080/';


