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
    constructor(private carservice: CarService) { }

    ngOnInit() {
        this.carForm = new FormGroup({
            name: new FormControl(),
            password: new FormControl(),
        })
    }
    addcar(val) {
        console.log("valuess", val, environment.apiUrl)
        this.carservice.addCar(val.name, val.password).subscribe(res => {
            console.log("ress", res)
        })
    }
}
