import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../../app.module';
import { driverpageRoutes } from './driverpage.routing';
import { creaeterideComponent } from './creaeteride/creaeteride.component';
import { driverComponent } from './driver/driver.component';
import { ProfileComponent } from './driver/profile.component';
import { MessageDialogModule } from 'app/components/message.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(driverpageRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    MessageDialogModule
  ],
  declarations: [
    creaeterideComponent,
    driverComponent,
    ProfileComponent 
  ]
})

export class DriverPage {}
