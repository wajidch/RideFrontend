import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';
import { ExcelService } from 'app/services/excel.service';

@Component({
    selector: 'app-allrides-cmp',
    templateUrl: 'allrides.component.html'
})

export class allridesComponent implements OnInit {
    @ViewChild("btnModalDeleteClose") btnModalDeleteClose: ElementRef;
    @ViewChild("btnMsgOpen") btnMsgOpen: ElementRef;
    message: String = '';
    dialogTitle: String = '';
    
    rides: RideModel[] = [];

    todayDate = new Date();
    prevWeek = new Date();
    prevMonth = new Date();

    ridesToExport: any[] = [];
    ride: RideModel;

    constructor(private appServiceManager: AppServiceManager, private excelService: ExcelService) { };
    ngOnInit() {
        this.ride = new RideModel();
        let date = new Date();
        this.prevWeek.setDate(date.getDate() - 7);
        this.prevMonth.setDate(date.getDate() - 28);
        this.getAll();
    }

    getAll() {
        this.appServiceManager.get('rides').subscribe(res => {
            this.rides = res;
        });
    }

    exportAsXLSXOfMonth(): void {
        this.ridesToExport = [];
        this.rides.forEach(ride => {
            let rideDate = new Date(ride.createdOn).toLocaleDateString();
            let prevmonthdate = new Date(this.prevMonth).toLocaleDateString();
            if (rideDate > prevmonthdate) {
                this.ridesToExport.push(this.getObj(ride));
            }
        });
        if (this.ridesToExport.length > 0) {
            this.excelService.exportAsExcelFile(this.ridesToExport, 'MonthRides');
        } else {
            this.message = "No Rides for this month";
            this.dialogTitle = "Error Message";
            this.btnMsgOpen.nativeElement.click();
        }
    }
    exportAsXLSXOfWeek(): void {
        this.ridesToExport = [];
        this.rides.forEach(ride => {
            let rideDate = new Date(ride.createdOn).toLocaleDateString();
            if (rideDate > this.prevWeek.toLocaleDateString()) {
                this.ridesToExport.push(this.getObj(ride));
            }
        });
        if (this.ridesToExport.length > 0) {
            this.excelService.exportAsExcelFile(this.ridesToExport, 'WeekRides');
        } else {
            this.message = "No Rides for this week";
            this.dialogTitle = "Error Message";
            this.btnMsgOpen.nativeElement.click();
        }
       
    }

    exportAsXLSXOfDay(): void {
        this.ridesToExport = [];
        this.rides.forEach(ride => {
            let rideDate = new Date(ride.createdOn).toDateString();
            if (rideDate == this.todayDate.toDateString()) {
                this.ridesToExport.push(this.getObj(ride));
            }
        });
        if (this.ridesToExport.length > 0) {
            this.excelService.exportAsExcelFile(this.ridesToExport, 'TodayRides');
        } else {
            this.message = "No Rides for today";
            this.dialogTitle = "Error Message";
            this.btnMsgOpen.nativeElement.click();
        }
       
    }

    getObj(obj: any){
        let rideDate = new Date(obj.createdOn).toLocaleDateString();
        let ride = {
            createdOn : rideDate,
            startPoint :  obj.startPoint,
            endPoint : obj.endPoint,
            startTime :  obj.startTime,
            endTime :  obj.endTime,
            paymentMethod :  obj.paymentMethod,
            amount :  obj.amount,
            customer: obj.customer
        };
     
        return ride;
    }

    confirmDelete(rideId){
        this.ride._id = rideId;
    }

    deleteRide(){
        this.appServiceManager.detele('rides/'+ this.ride._id).subscribe(res => {
            console.log("ress", res);
            this.btnModalDeleteClose.nativeElement.click();
            this.getAll();
        });
    }
}

