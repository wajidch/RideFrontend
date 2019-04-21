import { NgModule, ElementRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';

import { SidebarModule } from './RIDE-MANAGMENT/sidebar/sidebar.module';
import { FooterModule } from './RIDE-MANAGMENT/shared/footer/footer.module';
import { NavbarModule } from './RIDE-MANAGMENT/shared/navbar/navbar.module';
import { FixedpluginModule } from './RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './RIDE-MANAGMENT/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './RIDE-MANAGMENT/layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DataService } from './services/dataService';
import { AuthService } from './services/auth/auth.service';
import { AppServiceManager } from './services/appServiceManager';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ExcelService } from './services/excel.service';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
    NgbModule,
    AmazingTimePickerModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuardService,
    DataService,
    AppServiceManager,
    ExcelService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
