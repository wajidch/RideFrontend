import { Component, OnInit } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';

@Component({
    selector: 'app-creaeteride-cmp',
    templateUrl: 'creaeteride.component.html',
    styleUrls: ['creaeteride.component.css']
})

export class creaeterideComponent implements OnInit {
    ride: RideModel;
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
        this.ride = new RideModel();
    }

    createRide() {
        var postData = JSON.stringify(this.ride);
        this.appServiceManager.post('rides', postData).subscribe(res => {
            console.log("res", res);
        });
    }
}
