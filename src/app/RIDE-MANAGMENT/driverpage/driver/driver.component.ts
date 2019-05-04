import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';
import { DriverModel } from 'app/models/driver.models';
import { AuthService } from 'app/services/auth/auth.service';
import { UserModel } from 'app/models/user.models';


@Component({
    selector: 'app-driver-cmp',
    templateUrl: 'driver.component.html'
})

export class driverComponent implements OnInit {
    @ViewChild("btnCloseUpdateride") btnCloseUpdateride : ElementRef

    today: number = Date.now();
    car: any;
    ride: RideModel;
    myLastRides: RideModel[] = [];
    //driver: DriverModel;
    user: UserModel;
    moneyEarned: number = 0;
    wheelChairs = [
        { id: "true", label: "Yes" },
        { id: "false", label: "No" }
    ];
    rideTypes = [
        { id: "Normal", label: "Normal" },
        { id: "Medical", label: "Medical" },
        { id: "School", label: "School" }
    ];
    paymentMethods = [
        { id: "Cash", label: "Cash" },
        { id: "Card", label: "Card" }
    ];
    constructor(private appServiceManager: AppServiceManager,private auth: AuthService) { }
    ngOnInit(): void {
        
       // this.driver = new DriverModel();
        this.user = new UserModel();
        this.ride = new RideModel();
        this.car = JSON.parse(this.auth.getSession("car"));
        this.user = JSON.parse(this.auth.getSession("currentUser"));
       // this.getDriver(this.car);
      
        this.getLastRides();
    }
    // getDriver(car) {
    //     this.appServiceManager.get('drivers/' + car._id).subscribe(res => {
    //         this.driver = res;
    //     });
    // }
    getLastRides() {
        this.appServiceManager.get('users/mylastrides/' + this.user._id).subscribe((mylastrides) => {
            this.myLastRides = mylastrides;
            this.moneyEarned = 0;
            this.myLastRides.forEach(ride=>{
                this.moneyEarned = this.moneyEarned + ride.amount;
            });
        });
    }

    confirmUpdate(ride: RideModel) {
       this.ride = ride;
    }

    updateRide() {
        var putData = JSON.stringify(this.ride);
        this.appServiceManager.put('rides/' + this.ride._id, putData).subscribe(res => {
            this.btnCloseUpdateride.nativeElement.click();
            this.getLastRides();
        })
    } 
}
