import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AuthService } from 'app/services/auth/auth.service';
import { Role } from 'app/utilities/constants';
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



@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    user: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    constructor(public auth: AuthService) { }

    ngOnInit() {
        this.user = JSON.parse(this.auth.getSession("currentUser"));
        // Menu Items
        const ROUTES: RouteInfo[] = [{
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
                { path: 'users', title: 'Manage Users', ab: 'AO' },
                { path: 'roles', title: 'Manage Roles', ab: 'AO' },
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

        localStorage.setItem("routes", JSON.stringify(ROUTES));
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        var items = [];
        if (this.user.role.name.includes(Role.DRIVER)) {
            let itemProceeded = 0;
            this.menuItems.forEach((item, index, array) => {
                itemProceeded++;
                if (item.path.includes("/driverpage")) {
                    items.push(item);
                }
                if (itemProceeded == array.length) {
                    this.menuItems = items;
                }
            });
        }
        else if (this.user.role.name.includes(Role.CENTRALMANAGER)) {
            let itemProceeded = 0;

            this.menuItems.forEach((item, index, array) => {
                itemProceeded++;
                if (item.path.includes("/administrations")) {
                    items.push(item);
                    for (let i = 0; i < item.children.length; i++) {
                        if (item.children[i].path != "centralmanager") {
                            item.children.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (itemProceeded == array.length) {
                    this.menuItems = items;
                }

            });
        } else if (this.user.role.name.includes(Role.ADMIN)) {
            let itemProceeded = 0;
            this.menuItems.forEach((item, index, array) => {
                itemProceeded++;
                if (item.path.includes("/administrations")) {
                    items.push(item);
                }
                if (itemProceeded == array.length) {
                    this.menuItems = items;
                }

            });
        }
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
