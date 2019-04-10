import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CarService } from '../../../services/car.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-registercar-cmp',
    templateUrl: 'registercar.component.html'
})

export class registercarComponent implements OnInit {
    carForm: FormGroup;
    carList;
    constructor(private carservice: CarService) { }

    ngOnInit() {
        this.carForm = new FormGroup({
            name: new FormControl(),
            password: new FormControl(),
        })
        this.listOfCar();
    }
    addcar(val) {
        this.carservice.addCar(val.name, val.password).subscribe(res => {
            console.log("ress", res)
            this.listOfCar();
        })
    }
    listOfCar() {

        this.carservice.listOfcar().subscribe(res => {

            this.carList = res;
        })
    }
}
