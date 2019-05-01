import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { AuthService } from 'app/services/auth/auth.service';
import { Response } from '@angular/http';
import { HttpResponse } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';
import {AppServiceManager} from 'app/services/appServiceManager';
import { CarModel } from 'app/models/car.models';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    filteredCars: Observable<CarModel[]>;
    myControl = new FormControl();
    cars: CarModel[] = [];
    //carNumber: string;
     password: string;

    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(private auth: AuthService, private element: ElementRef, private router: Router, private route: ActivatedRoute,
        private appServiceManager: AppServiceManager) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);

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

    login(){
        var obj = {
            carNumber: this.myControl.value.carNumber,
            password: this.password
        };
        this.appServiceManager.post('cars/login',JSON.stringify(obj)).subscribe((res)=>{
           if(res.status==true){
               console.log(res.car);
               sessionStorage.setItem('car',JSON.stringify(res.car));
            this.router.navigateByUrl('dashboard');
           } else {
               alert(res.error);
           }
        },(error)=>{
            if(error.status==401){
                alert(error.statusText);
               } else {
                   alert(error);
               }
        });
    }

    // login(){

    //     this.auth.login(this.emailNM, this.passwordNM);
        
    //     if(localStorage.getItem('status')=="200"){
    //         console.log(localStorage.getItem('token'));
    //         console.log(localStorage.getItem('error'));
    //         console.log(localStorage.getItem('status'));
    //         console.log(localStorage.getItem('redirectTo'));
    //         this.router.navigate([localStorage.getItem('redirectTo')], { relativeTo: this.route}); 
    //     }else{
    //         console.log(localStorage.getItem('token'));
    //         console.log(localStorage.getItem('error'));
    //         console.log(localStorage.getItem('status'));
    //         console.log(localStorage.getItem('redirectTo'));
    //     }
        
    // }

    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
}
