import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
//import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Headers, Response, Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map'
/**
 * Generic class, an end point to call rest apis
 */
@Injectable()
export class AppServiceManager implements OnInit {
    private jsonHeaders: Headers;
    private apiUrl = environment.apiUrl;
    constructor(private http: Http) {
        this.apiUrl = environment.apiUrl;
        this.jsonHeaders = new Headers();
        this.jsonHeaders.append('Content-Type', 'application/json');
        this.jsonHeaders.append('Accept', 'application/json');
        this.jsonHeaders.append("Access-Control-Allow-Origin", "*")
    }

    ngOnInit() {
    }

    get(url: string) {
        // const headers = new HttpHeaders();
        // headers.append('Content-Type', 'application/json');
       //    headers.append("Access-Control-Allow-Origin", "*")

        return this.http.get(this.apiUrl + url,{headers: this.jsonHeaders}) 
            .map((res: any) => {
            var serviceResponse = res.json();
            return serviceResponse;
        });

    }

    post(url: string, body: string) {
      
        return this.http.post(this.apiUrl + url, body, {headers: this.jsonHeaders})
        .map((res: any) => {
            var serviceResponse = res.json();
            return serviceResponse;
        });

    }

    put(url: string, body: string) {

        return this.http.put(this.apiUrl + url, body, {headers: this.jsonHeaders})
        .map((res: any) => {
            var serviceResponse = res.json();
            return serviceResponse;
        });

    }

    detele(url: string) {

        return this.http.delete(this.apiUrl + url, {headers: this.jsonHeaders})
        .map((res: any) => {
            var serviceResponse = res.json();
            return serviceResponse;
        });

    }

}
