// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CarModel } from 'app/models/car.models';
import { RideModel } from 'app/models/ride.models';
import { DriverModel } from 'app/models/driver.models';
import { AppServiceManager } from 'app/services/appServiceManager';

declare const $: any;

@Component({
    selector: 'app-centralmanager-cmp',
    templateUrl: 'centralmanager.component.html'
})
export class centralmanagerComponent implements OnInit {

    @ViewChild('btnModalcreatePlannedRide') btnModalcreatePlannedRide: ElementRef;
    @ViewChild('btnModalcreatePlannedShift') btnModalcreatePlannedShift: ElementRef;
    
    //All drivers and rides
    rides: RideModel[] = [];
    drivers: DriverModel[] = [];

    //planned rides for today
    ride: RideModel;
    todayPlannedRides: RideModel[] = [];

    //Today Shift
    todayPlannedShifts: any[] = [];
    myControl = new FormControl();
    cars: CarModel[] = [];
    filteredCars: Observable<CarModel[]>;

    driverControl = new FormControl();
    filteredDrivers: Observable<DriverModel[]>;


    constructor(private appServiceManager: AppServiceManager) { }
    ngOnInit() {
        this.ride = new RideModel();
      
        this.getAllDrivers();
        this.getAllRides();
        this.getTodayPlannedRides();
        this.getTodayPlannedShifts();

        this.appServiceManager.get('cars').subscribe(res => {
            this.cars = res;

            this.filteredCars = this.myControl.valueChanges
                .pipe(
                    startWith<string | CarModel>(''),
                    map(value => typeof value === 'string' ? value : value.carNumber),
                    map(carNumber => carNumber ? this._filter(carNumber) : this.cars.slice())
                );
        });
    }
    displayFn(car?: CarModel): string | undefined {
        return car ? car.carNumber : undefined;
    }

    private _filter(name: string): CarModel[] {
        const filterValue = name.toLowerCase();

        return this.cars.filter(car => car.carNumber.toLowerCase().indexOf(filterValue) === 0);
    }

    createTodaysPlannedRide() {
        // this.car._id = this.myControl.value._id;
        // this.car.carNumber = this.myControl.value.carNumber;
        var postData = JSON.stringify(this.ride);
        this.appServiceManager.post('rides/todayPlannedRides', postData).subscribe(res => {
            this.btnModalcreatePlannedRide.nativeElement.click();
            this.getTodayPlannedRides();
        });
    }

    getTodayPlannedRides() {
        this.appServiceManager.get('rides/todayPlannedRides').subscribe(res => {
            this.todayPlannedRides = res;
        });
    }

    getAllDrivers() {
        this.appServiceManager.get('drivers').subscribe(res => {
            this.drivers = res;
            this.filteredDrivers = this.driverControl.valueChanges
                .pipe(
                    startWith<string | DriverModel>(''),
                    map(value => typeof value === 'string' ? value : value.firstName),
                    map(name => name ? this._driverFilter(name) : this.drivers.slice())
                );
        });
    }

    driverDisplayFn(driver?: DriverModel): string | undefined {
        return driver ? driver.firstName : undefined;
    }

    private _driverFilter(name: string): DriverModel[] {
        const filterValue = name.toLowerCase();

        return this.drivers.filter(driver => driver.firstName.toLowerCase().indexOf(filterValue) === 0);
    }
    getAllRides() {
        this.appServiceManager.get('rides').subscribe(res => {
            this.rides = res;
        });
    }

    createTodayPlanShift() { 
        let obj = {
            car : this.myControl.value,
            driver : this.driverControl.value
        }
        var postData = JSON.stringify(obj);
        this.appServiceManager.post('rides/todayPlannedShifts', postData).subscribe(res => {
            this.btnModalcreatePlannedShift.nativeElement.click();
            this.getTodayPlannedShifts();
        });
    }

    getTodayPlannedShifts() {
        this.appServiceManager.get('rides/todayPlannedShifts').subscribe(res => {
            this.todayPlannedShifts = res;
            console.log(this.todayPlannedShifts );
        });
    }
}
