import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { UsersLoginComponent } from './login/users.login.component';
import { MaterialModule } from 'app/app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,
    UsersLoginComponent
  ]
})

export class PagesModule {}
