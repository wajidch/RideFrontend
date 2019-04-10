import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../app.module';


import { administrationsRoutes } from './administrations.routing';
import { registercarComponent } from './registerdriver/registercar.component';
import { allridesComponent } from './allrides/allrides.component';
import { centralmanagerComponent } from './centralmanager/centralmanager.component';
import { changepasswordComponent } from './changepassword/changepassword.component';
import { adminoverviewComponent } from './adminoverview/adminoverview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(administrationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    registercarComponent,
    allridesComponent,
    centralmanagerComponent,
    changepasswordComponent,
    adminoverviewComponent,
  ]
})

export class AdministrationsModule { }
