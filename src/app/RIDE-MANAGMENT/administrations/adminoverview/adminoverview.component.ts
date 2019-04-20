import { Component, OnInit } from '@angular/core';
import { RideModel } from 'app/models/ride.models';
import { DriverModel } from 'app/models/driver.models';
import { AppServiceManager } from 'app/services/appServiceManager';
declare var $: any;

@Component({
    selector: 'app-adminoverview-cmp',
    templateUrl: 'adminoverview.component.html'
})

export class adminoverviewComponent implements OnInit {

    //All drivers and rides
    rides: RideModel[] = [];
    drivers: DriverModel[] = [];

    public onlineDrivers: number = 0;
    public onrideDrivers: number = 0;
    public todayRides: number = 0;
    public yesterdayRides: number = 0;

    todayDate = new Date();
    yesterDayDate = new Date();

    constructor(private appServiceManager: AppServiceManager) { }
    ngOnInit(): void {
        let date = new Date();
        this.yesterDayDate.setDate(date.getDate() - 1);
        this.getAllDrivers();
        this.getAllRides();
    }
    getAllDrivers() {
        this.appServiceManager.get('drivers').subscribe(res => {
            this.drivers = res;
            this.drivers.forEach(driver => {
                if (driver.status.includes("online")) {
                    this.onlineDrivers++;
                }
                if (driver.status.includes("onride")) {
                    this.onrideDrivers++;
                }
            });
        });
    }

    getAllRides() {
        this.appServiceManager.get('rides').subscribe(res => {
            this.rides = res;

            this.rides.forEach(ride => {
                let rideDate = new Date(ride.createdOn).toDateString();
                if (rideDate == this.todayDate.toDateString()) {
                    this.todayRides++;
                }
                if (rideDate == this.yesterDayDate.toDateString()) {
                    this.yesterdayRides++;
                }
            });
        });
    }
}
