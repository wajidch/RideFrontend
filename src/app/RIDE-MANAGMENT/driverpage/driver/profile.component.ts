import { Component, OnInit } from '@angular/core';
import {DriverModel} from 'app/models/driver.models';
import { FormControl } from '@angular/forms';
import { AppServiceManager } from 'app/services/appServiceManager';

@Component({
    selector: 'app-profile-cmp',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    
    driver: DriverModel;
    date  =  new  FormControl(new  Date());
    car:any;
    constructor(private appServiceManager: AppServiceManager){}

    ngOnInit(): void {
        this.driver = new DriverModel();
        this.car = JSON.parse(localStorage.getItem("car"));
        this.getDriver(this.car);
    }

    getDriver(car) {
        this.appServiceManager.get('drivers/'+car._id).subscribe(res => {
          this.driver = res;
        });
    }
    editProfile() { 
        var postData = JSON.stringify(this.driver);
        this.appServiceManager.put('drivers/profile/'+this.car._id, postData).subscribe(res => {
          alert("Updated");
        });
    }
    
}
