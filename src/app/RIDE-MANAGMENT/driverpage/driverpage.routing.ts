import { Routes } from '@angular/router';

import { creaeterideComponent } from './creaeteride/creaeteride.component';
import { driverComponent } from './driver/driver.component';

export const driverpageRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'createride',
        component: creaeterideComponent
    }]},
    {
        path: '',
        children: [ {
          path: 'driver',
          component: driverComponent
          }]
      },  
];