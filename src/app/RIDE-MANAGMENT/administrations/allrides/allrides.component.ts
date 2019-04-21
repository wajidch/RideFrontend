import { Component, OnInit } from '@angular/core';
import { AppServiceManager } from 'app/services/appServiceManager';
import { RideModel } from 'app/models/ride.models';
import { ExcelService } from 'app/services/excel.service';

@Component({
    selector: 'app-allrides-cmp',
    templateUrl: 'allrides.component.html'
})

export class allridesComponent implements OnInit {

    rides: RideModel[] = [];

    todayDate = new Date();
    prevWeek = new Date();
    prevMonth = new Date();

    ridesToExport: any[] = [];

    constructor(private appServiceManager: AppServiceManager, private excelService: ExcelService) { };
    ngOnInit() {
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
            alert("No Rides for this month")
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
            alert("No Rides for this week")
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
            alert("No Rides for today")
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
}
