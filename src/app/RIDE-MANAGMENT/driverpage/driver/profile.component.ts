import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DriverModel} from 'app/models/driver.models';
import { FormControl } from '@angular/forms';
import { AppServiceManager } from 'app/services/appServiceManager'; 
import { AuthService } from 'app/services/auth/auth.service';
@Component({
    selector: 'app-profile-cmp',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    @ViewChild("btnMsgOpen")btnMsgOpen: ElementRef;
   // @ViewChild("btnMsgClose")btnMsgClose: ElementRef;
    driver: DriverModel;
    date  =  new  FormControl(new  Date());
    car:any;
    message: String = '';
    dialogTitle: String= '';
    constructor(private appServiceManager: AppServiceManager,private auth: AuthService){}

    ngOnInit(): void {
        this.driver = new DriverModel();
        this.car = JSON.parse(this.auth.getSession("car"));
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
          this.message = "Profile is Successfully Updated";
          this.dialogTitle = "Success Message";
          this.btnMsgOpen.nativeElement.click();
          // setTimeout(()=>{
          //   this.btnMsgClose.nativeElement.click();
          // },3000);
        });
    }
    
}
