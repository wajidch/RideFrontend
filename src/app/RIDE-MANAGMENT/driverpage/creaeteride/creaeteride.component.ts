import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';

@Component({
    selector: 'app-creaeteride-cmp',
    templateUrl: 'creaeteride.component.html',
    styleUrls: ['creaeteride.component.css']
})

export class creaeterideComponent implements OnInit {
    @ViewChild("btnMsgOpen") btnMsgOpen: ElementRef;
    ride: RideModel;
    car: any;
    message: String = '';
    dialogTitle: String = '';
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
    constructor(private appServiceManager: AppServiceManager) { };

    ngOnInit() {
        this.car = JSON.parse(localStorage.getItem("car"));
        this.ride = new RideModel();
    }

    createRide() {
        this.ride.carId = this.car._id;
        var postData = JSON.stringify(this.ride);
        this.appServiceManager.post('rides', postData).subscribe(res => {
            this.message = "Ride is Successfully Created";
            this.dialogTitle = "Success Message";
            this.btnMsgOpen.nativeElement.click();
        });
    }
}
