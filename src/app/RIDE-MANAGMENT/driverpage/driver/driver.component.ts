import { Component, OnInit } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';


@Component({
    selector: 'app-driver-cmp',
    templateUrl: 'driver.component.html'
})

export class driverComponent implements  OnInit {
 
    car:any;
    myLastRides: RideModel[] = [];

    constructor(private appServiceManager: AppServiceManager){}
    ngOnInit(): void {
        this.car = JSON.parse(localStorage.getItem("car"));
     this.getLastRides();
    }
    getLastRides() {
        this.appServiceManager.get('drivers/mylastrides/' + this.car._id).subscribe((mylastrides)=>{
            this.myLastRides = mylastrides;
        });
    }

    
}
