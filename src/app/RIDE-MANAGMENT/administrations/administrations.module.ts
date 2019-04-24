import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../app.module';


import { administrationsRoutes } from './administrations.routing';
import { registercarComponent } from './registercar/registercar.component';
import { allridesComponent } from './allrides/allrides.component';
import { centralmanagerComponent } from './centralmanager/centralmanager.component';
import { changepasswordComponent } from './changepassword/changepassword.component';
import { adminoverviewComponent } from './adminoverview/adminoverview.component';

import { MessageDialogModule } from 'app/components/message.module';
import { RoleComponent } from './user-management/role.component';
import { UserComponent } from './user-management/user.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(administrationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MessageDialogModule
  ],
  declarations: [
    registercarComponent,
    allridesComponent,
    centralmanagerComponent,
    changepasswordComponent,
    adminoverviewComponent,
    RoleComponent,
    UserComponent

  ]
})

export class AdministrationsModule { }
