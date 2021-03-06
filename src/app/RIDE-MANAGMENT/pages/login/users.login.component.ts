import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import {AppServiceManager} from 'app/services/appServiceManager';

declare var $: any;

@Component({
    selector: 'app-users-login-cmp',
    templateUrl: './users.login.component.html'
})

export class UsersLoginComponent implements OnInit, OnDestroy {

     email: string;
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
    }

    login(){
        var obj = {
            email: this.email,
            password: this.password
        };
        this.appServiceManager.post('users/login',JSON.stringify(obj)).subscribe((res)=>{
           if(res.status==true){
               console.log(res.user);
               sessionStorage.setItem('currentUser',JSON.stringify(res.user));
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
