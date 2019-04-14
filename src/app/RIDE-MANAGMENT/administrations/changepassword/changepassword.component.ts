import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CarModel } from 'app/models/car.models';
import { AppServiceManager } from 'app/services/appServiceManager';


@Component({
    selector: 'app-changepassword-cmp',
    templateUrl: 'changepassword.component.html'
})

export class changepasswordComponent {
    myControl = new FormControl();
    cars: CarModel[] = [];
    car: CarModel;
    
    filteredCars: Observable<CarModel[]>;

    constructor(private appServiceManager: AppServiceManager) { }

    ngOnInit() {
        this.car = new CarModel();
        this.appServiceManager.get('cars').subscribe(res => {
            this.cars = res;

            this.filteredCars = this.myControl.valueChanges
                .pipe(
                    startWith<string | CarModel>(''),
                    map(value => typeof value === 'string' ? value : value.carNumber),
                    map(carNumber => carNumber ? this._filter(carNumber) : this.cars.slice())
                );
        });
    }

    displayFn(car?: CarModel): string | undefined {
        return car ? car.carNumber : undefined;
    }

    private _filter(name: string): CarModel[] {
        const filterValue = name.toLowerCase();

        return this.cars.filter(car => car.carNumber.toLowerCase().indexOf(filterValue) === 0);
    }

    changePassword(){
        this.car._id = this.myControl.value._id;
        this.car.carNumber = this.myControl.value.carNumber;
        var postData = JSON.stringify(this.car);
        this.appServiceManager.put('cars/' + this.car._id, postData).subscribe(res => {
            console.log("ress", res);
            alert("Password updated");
        })
    }

}
