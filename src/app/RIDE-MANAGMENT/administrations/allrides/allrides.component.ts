import { Component, OnInit } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import {RideModel} from 'app/models/ride.models';

@Component({
    selector: 'app-allrides-cmp',
    templateUrl: 'allrides.component.html'
})

export class allridesComponent implements OnInit {
    
    rides:RideModel[] = [];

    constructor(private appServiceManager: AppServiceManager) { };
    ngOnInit(){
        this.getAll();
    }
    
    getAll() {
        this.appServiceManager.get('rides').subscribe(res => {
            this.rides = res;
            console.log(this.rides);
        });
    }
}
