import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CarService implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }


    addCar(name: string, password: string) {
        console.log("nmapass", name, password)
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*")

        return this.http.post(environment.apiUrl + 'cars/addCar',
            {
                name: name,
                password: password,

            })

    }


    listOfcar() {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        //    headers.append("Access-Control-Allow-Origin", "*")

        return this.http.get(environment.apiUrl + 'cars/listOfCar',
            { headers: headers })

    }



}
