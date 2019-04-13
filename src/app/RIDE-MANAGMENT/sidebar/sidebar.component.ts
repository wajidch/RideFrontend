import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},

{
    path: '/administrations',
    title: 'Administration',
    type: 'sub',
    icontype: 'apps',
    collapse: 'administration',
    children: [
        { path: 'RegisterCar', title: 'Register Car', ab: 'B' },
        { path: 'allrides', title: 'allrides', ab: 'P' },
        { path: 'centralmanager', title: 'Central Manager', ab: 'CM' },
        { path: 'changepassword', title: 'Change Password', ab: 'CP' },
        { path: 'adminoverview', title: 'adminoverview', ab: 'AO' },
    ]
},
{
    path: '/driverpage',
    title: 'Driver Page',
    type: 'sub',
    icontype: 'apps',
    collapse: 'driverpage',
    children: [
        { path: 'createride', title: 'Create Ride', ab: 'CR' },
        { path: 'driver', title: 'Driver Detail', ab: 'DD' },
    ]
},
];

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        })
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        })
    }

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }

    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
