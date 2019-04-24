import { Routes } from '@angular/router';

import { registercarComponent } from './registercar/registercar.component';
import { allridesComponent } from './allrides/allrides.component';
import { centralmanagerComponent } from './centralmanager/centralmanager.component';
import { changepasswordComponent } from './changepassword/changepassword.component';
import { adminoverviewComponent } from './adminoverview/adminoverview.component';
import { RoleComponent } from './user-management/role.component';
import { UserComponent } from './user-management/user.component';


export const administrationsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'RegisterCar',
            component: registercarComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'allrides',
            component: allridesComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'centralmanager',
            component: centralmanagerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'changepassword',
            component: changepasswordComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'adminoverview',
            component: adminoverviewComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'roles',
            component: RoleComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'users',
            component: UserComponent
        }]
    }
];
