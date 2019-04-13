import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppServiceManager } from '../../../services/appServiceManager';
import { environment } from '../../../../environments/environment';
import {CarModel} from 'app/models/car.models';

@Component({
    selector: 'app-registercar-cmp',
    templateUrl: 'registercar.component.html'
})

export class registercarComponent implements OnInit {
    @ViewChild("btnModalAddClose") btnModalAddClose: ElementRef;
    @ViewChild("btnModalDeleteClose") btnModalDeleteClose: ElementRef;
    @ViewChild("btnModalEditClose") btnModalEditClose: ElementRef;
    carForm: FormGroup;
    carList: any;
    car: CarModel;

    constructor(private appServiceManager: AppServiceManager) { }

    ngOnInit() {
        this.car = new CarModel();
        this.carForm = new FormGroup({
            carNumber: new FormControl(),
            password: new FormControl(),
        })
        this.listOfCar();
    }

    listOfCar() {

        this.appServiceManager.get('cars').subscribe(res => {
            this.carList = res;
            console.log(res);
        });
    }
    

    createCar(car) {
        var postData = JSON.stringify(car);
        this.appServiceManager.post('cars',postData).subscribe(res => {
            console.log("ress", res);
            this.btnModalAddClose.nativeElement.click();
            this.listOfCar();
        })
    }

    confirmUpdate(car: CarModel) { 
        this.car = car;
    }

    updateCar(car) {
        var putData = JSON.stringify(car);
        this.appServiceManager.put('cars/'+ this.car._id,putData).subscribe(res => {
            console.log("ress", res);
            this.btnModalEditClose.nativeElement.click();
            this.listOfCar();
        })
    }

    confirmDelete(carId){
        this.car._id = carId;
    }

    deleteCar(){
        this.appServiceManager.detele('cars/'+ this.car._id).subscribe(res => {
            console.log("ress", res);
            this.btnModalDeleteClose.nativeElement.click();
            this.listOfCar();
        });
    }
  
}
