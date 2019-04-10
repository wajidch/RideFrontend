import { Routes } from '@angular/router';

import { AdminLayoutComponent } from'./RIDE-MANAGMENT/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from'./RIDE-MANAGMENT/layouts/auth/auth-layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren:'./RIDE-MANAGMENT/dashboard/dashboard.module#DashboardModule',
      // canActivate: [AuthGuardService] 
  }, {
      path: 'administrations',
      loadChildren:'./RIDE-MANAGMENT/administrations/administrations.module#AdministrationsModule'
  }, 
  {
    path: 'driverpage',
    loadChildren:'./RIDE-MANAGMENT/driverpage/driverpage.module#DriverPage'
},   
]}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren:'./RIDE-MANAGMENT/pages/pages.module#PagesModule'
    }]
  }
]; 