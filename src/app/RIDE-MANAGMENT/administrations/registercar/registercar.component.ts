import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppServiceManager } from '../../../services/appServiceManager';
import { CarModel } from 'app/models/car.models';
import { UserModel } from 'app/models/user.models';

@Component({
    selector: 'app-registercar-cmp',
    templateUrl: 'registercar.component.html'
})

export class registercarComponent implements OnInit {
    @ViewChild("btnModalAddClose") btnModalAddClose: ElementRef;
    @ViewChild("btnModalDeleteClose") btnModalDeleteClose: ElementRef;
    @ViewChild("btnModalEditClose") btnModalEditClose: ElementRef;
    // carForm: FormGroup;
    carList: any;
    car: CarModel;
    users: UserModel[] = [];
    selectedUser: UserModel;
    constructor(private appServiceManager: AppServiceManager) { }

    ngOnInit() {
        this.car = new CarModel();
        this.selectedUser = new UserModel();
        // this.carForm = new FormGroup({
        //     carNumber: new FormControl(),
        //     password: new FormControl()
        // })
        this.listOfCar();
        this.getUsers();
    }

    listOfCar() {

        this.appServiceManager.get('cars').subscribe(res => {
            this.carList = res;
            console.log(res);
        });
    }


    createCar() {
        this.car.user = this.selectedUser;
        var postData = JSON.stringify(this.car);
        this.appServiceManager.post('cars', postData).subscribe(res => {
            console.log("ress", res);
            this.btnModalAddClose.nativeElement.click();
            this.listOfCar();
        })
    }

    confirmUpdate(car: CarModel) {
        this.car = car;
        this.selectedUser = this.car.user;
    }

    updateCar(car: CarModel) {
        car.user = this.selectedUser;
        var putData = JSON.stringify(car);
        this.appServiceManager.put('cars/' + this.car._id, putData).subscribe(res => {
            console.log("ress", res);
            this.btnModalEditClose.nativeElement.click();
            this.listOfCar();
        })
    }

    confirmDelete(carId) {
        this.car._id = carId;
    }

    deleteCar() {
        this.appServiceManager.detele('cars/' + this.car._id).subscribe(res => {
            console.log("ress", res);
            this.btnModalDeleteClose.nativeElement.click();
            this.listOfCar();
        });
    }


    getUsers() {
        this.appServiceManager.get('users').subscribe((res: UserModel[]) => {
            if (res.length > 0) {
                res.forEach(user => {
                    if (user.role.name.toLowerCase().includes("driver")) {
                        this.users.push(user);
                    }
                });
            }
        });
    }
    selectUser(user) {
        console.log(user);
        //    this.selectedUser = null;
        //    this.selectedUser = this.users.find(x =>x._id == userId);
    }
    /* Return true or false if it is the selected */
    compareById(idFist, idSecond) {
        return idFist && idSecond && idFist._id == idSecond._id;
    }

}
