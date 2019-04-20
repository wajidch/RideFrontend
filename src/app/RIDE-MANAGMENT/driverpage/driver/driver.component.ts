import { Component, OnInit } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';
import { DriverModel } from 'app/models/driver.models';


@Component({
    selector: 'app-driver-cmp',
    templateUrl: 'driver.component.html'
})

export class driverComponent implements OnInit {

    today: number = Date.now();
    car: any;
    myLastRides: RideModel[] = [];
    driver: DriverModel;
    moneyEarned: number = 0;
    constructor(private appServiceManager: AppServiceManager) { }
    ngOnInit(): void {
        
        this.driver = new DriverModel();
        this.car = JSON.parse(localStorage.getItem("car"));
        this.getDriver(this.car);
        this.getLastRides();
    }
    getDriver(car) {
        this.appServiceManager.get('drivers/' + car._id).subscribe(res => {
            this.driver = res;
        });
    }
    getLastRides() {
        this.appServiceManager.get('drivers/mylastrides/' + this.car._id).subscribe((mylastrides) => {
            this.myLastRides = mylastrides;
            this.myLastRides.forEach(ride=>{
                this.moneyEarned = this.moneyEarned + ride.amount;
            });
        });
    }


}
