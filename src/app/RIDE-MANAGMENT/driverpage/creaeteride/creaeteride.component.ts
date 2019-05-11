import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';
import { AuthService } from 'app/services/auth/auth.service';
import { ExcelService } from 'app/services/excel.service';
import { Role } from 'app/utilities/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-creaeteride-cmp',
    templateUrl: 'creaeteride.component.html',
    styleUrls: ['creaeteride.component.css']
})

export class creaeterideComponent implements OnInit {
    @ViewChild("btnMsgOpen") btnMsgOpen: ElementRef;
    ride: RideModel;
    car: any;
    user: any;
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
    constructor(private appServiceManager: AppServiceManager, private auth: AuthService
        , private excelService: ExcelService, private router: Router) { };

    ngOnInit() {
        this.car = JSON.parse(this.auth.getSession("car"));
        this.user = JSON.parse(this.auth.getSession("currentUser"));
        this.ride = new RideModel();
    }

    createRide() {
        if (this.car) {
            this.ride.carId = this.car._id;
        }
        this.ride.userId = this.user._id;
        var postData = JSON.stringify(this.ride);
        this.appServiceManager.post('rides', postData).subscribe(res => {
            if (this.user.role.name.includes(Role.DRIVER)) {
                this.router.navigateByUrl('/driverpage/driver');
            } else {
                this.message = "Ride is Successfully Created";
                this.dialogTitle = "Success Message";
                this.btnMsgOpen.nativeElement.click();
            }

        });
    }
    exportAsXLSX(): void {
        let ridesToExport = [];
        let obj = this.getObj(this.ride);
        if (obj != null && obj.from != null) {
            ridesToExport.push(obj);
            this.excelService.exportAsExcelFile(ridesToExport, 'NewRide');
        } else {
            this.message = "Fill the form first";
            this.dialogTitle = "Error Message";
            this.btnMsgOpen.nativeElement.click();
        }

    }

    getObj(obj: any) {
        let rideDate = new Date().toLocaleDateString();
        let ride = {
            createdOn: rideDate,
            from: obj.startPoint,
            destination: obj.endPoint,
            startTime: obj.startTime,
            endTime: obj.endTime,
            passengers: obj.totalPassengers,
            paymentMethod: obj.paymentMethod,
            amount: obj.amount,
            customer: obj.customer
        };

        return ride;
    }
}
