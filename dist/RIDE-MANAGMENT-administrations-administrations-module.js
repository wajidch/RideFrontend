(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RIDE-MANAGMENT-administrations-administrations-module"],{

/***/ "./src/app/RIDE-MANAGMENT/administrations/administrations.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/administrations.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdministrationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationsModule", function() { return AdministrationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _administrations_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrations.routing */ "./src/app/RIDE-MANAGMENT/administrations/administrations.routing.ts");
/* harmony import */ var _registerdriver_registerdriver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerdriver/registerdriver.component */ "./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.ts");
/* harmony import */ var _allrides_allrides_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allrides/allrides.component */ "./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.ts");
/* harmony import */ var _centralmanager_centralmanager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./centralmanager/centralmanager.component */ "./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.ts");
/* harmony import */ var _adminoverview_adminoverview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adminoverview/adminoverview.component */ "./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdministrationsModule = /** @class */ (function () {
    function AdministrationsModule() {
    }
    AdministrationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_administrations_routing__WEBPACK_IMPORTED_MODULE_5__["administrationsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _registerdriver_registerdriver_component__WEBPACK_IMPORTED_MODULE_6__["registerdriverComponent"],
                _allrides_allrides_component__WEBPACK_IMPORTED_MODULE_7__["allridesComponent"],
                _centralmanager_centralmanager_component__WEBPACK_IMPORTED_MODULE_8__["centralmanagerComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__["changepasswordComponent"],
                _adminoverview_adminoverview_component__WEBPACK_IMPORTED_MODULE_10__["adminoverviewComponent"],
            ]
        })
    ], AdministrationsModule);
    return AdministrationsModule;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/administrations.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/administrations.routing.ts ***!
  \***************************************************************************/
/*! exports provided: administrationsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "administrationsRoutes", function() { return administrationsRoutes; });
/* harmony import */ var _registerdriver_registerdriver_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerdriver/registerdriver.component */ "./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.ts");
/* harmony import */ var _allrides_allrides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allrides/allrides.component */ "./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.ts");
/* harmony import */ var _centralmanager_centralmanager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centralmanager/centralmanager.component */ "./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.ts");
/* harmony import */ var _adminoverview_adminoverview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminoverview/adminoverview.component */ "./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.ts");





var administrationsRoutes = [
    {
        path: '',
        children: [{
                path: 'RegisterDriver',
                component: _registerdriver_registerdriver_component__WEBPACK_IMPORTED_MODULE_0__["registerdriverComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'allrides',
                component: _allrides_allrides_component__WEBPACK_IMPORTED_MODULE_1__["allridesComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'centralmanager',
                component: _centralmanager_centralmanager_component__WEBPACK_IMPORTED_MODULE_2__["centralmanagerComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'changepassword',
                component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_3__["changepasswordComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'adminoverview',
                component: _adminoverview_adminoverview_component__WEBPACK_IMPORTED_MODULE_4__["adminoverviewComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n            <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"card\">\n                          <div class=\"card-header card-header-rose card-header-icon\">\n                            <div class=\"card-icon\">\n                              <i class=\"material-icons\">assignment</i>\n                            </div>\n                            <h4 class=\"card-title\">Admin OverView</h4>\n                          </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                        <div class=\"col-md-6 col-lg-6\">\n                                                <div class=\"card card-body text-center py-50\">\n                                                  <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Current Driver Registed: 2:39</a></h5>\n                                                  <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Current Driver Online:7</a></h5>\n                                                  <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Curent Driver On a Ride: 2000</a></h5>\n                                                </div>\n                                              </div>\n                                    \n                                              <div class=\"col-md-6 col-lg-6\">\n                                                  <div class=\"card card-body text-center py-50\">\n                                                    <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Rides Did Today: 2:39</a></h5>\n                                                    <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Rides Did Yesterday:7</a></h5>\n                                                    <h5 class=\"mt-3 mb-1\"><a class=\"hover-primary\" href=\"#\">Rides Did in Total: 2000</a></h5>\n                                                  </div>\n                                                </div>\n                                </div>\n                                   \n                                </div>\n                            </div>\n                             </div>\n                             </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: adminoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminoverviewComponent", function() { return adminoverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var adminoverviewComponent = /** @class */ (function () {
    function adminoverviewComponent() {
    }
    adminoverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminoverview-cmp',
            template: __webpack_require__(/*! ./adminoverview.component.html */ "./src/app/RIDE-MANAGMENT/administrations/adminoverview/adminoverview.component.html")
        })
    ], adminoverviewComponent);
    return adminoverviewComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">assignment</i>\n            </div>\n            <h4 class=\"card-title\">All Rides</h4>\n            <button class=\"btn btn-warning btn-round mat-raised-button pull-right\" data-toggle=\"modal\" data-target=\"#modal-add\" style=\"margin-top:-30px\" mat-raised-button><span class=\"mat-button-wrapper\">Excel</span><div class=\"mat-button-ripple mat-ripple\" matripple></div><div class=\"mat-button-focus-overlay\"></div></button>\n          </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n       \n    \n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Customer Name</th>\n              <th>From / Destination Place</th>\n              <th>From Time</th>\n              <th>End Time</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr >\n              <th >1</th>\n              <td>Mark</td>\n              <td>Lahore / Karachi</td>\n              <td>3/10/2019 1:59 AM</td>\n              <td>3/10/2019 2:30 AM</td>\n            </tr>\n          <tr >\n              <th >1</th>\n              <td>Mark</td>\n              <td>Lahore / Karachi</td>\n              <td>3/10/2019 1:59 AM</td>\n              <td>3/10/2019 2:30 AM</td>\n            </tr>\n            <tr >\n                <th >1</th>\n                <td>Mark</td>\n                <td>Lahore / Karachi</td>\n                <td>3/10/2019 1:59 AM</td>\n                <td>3/10/2019 2:30 AM</td>\n              </tr>\n              <tr >\n                  <th >1</th>\n                  <td>Mark</td>\n                  <td>Lahore / Karachi</td>\n                  <td>3/10/2019 1:59 AM</td>\n                  <td>3/10/2019 2:30 AM</td>\n                </tr>\n                 <tr >\n              <th >1</th>\n              <td>Mark</td>\n              <td>Lahore / Karachi</td>\n              <td>3/10/2019 1:59 AM</td>\n              <td>3/10/2019 2:30 AM</td>\n            </tr>\n            \n          </tbody>\n        </table>\n            </div>\n      \n            </div>\n      \n        </div>\n    </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.ts ***!
  \*******************************************************************************/
/*! exports provided: allridesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allridesComponent", function() { return allridesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var allridesComponent = /** @class */ (function () {
    function allridesComponent() {
    }
    allridesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allrides-cmp',
            template: __webpack_require__(/*! ./allrides.component.html */ "./src/app/RIDE-MANAGMENT/administrations/allrides/allrides.component.html")
        })
    ], allridesComponent);
    return allridesComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-rose card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons\">assignment</i>\n                </div>\n                <h4 class=\"card-title\">Curent Online Drivers</h4>\n              </div>\n                <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>Driver Name</th>\n                                <th>Status</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                             <tr>\n                                <th>1</th>\n                               <th>Maryam Amiri</th>\n                               <th><span class=\"badge badge-success\">Online</span></th>\n                             </tr>\n                             \n                             <tr>\n                                <th>1</th>\n                               <th>Maryam Amiri</th>\n                               <th><span class=\"badge badge-warning\">Offline</span></th>\n                             </tr>\n                             <tr>\n                                <th>1</th>\n                               <th>Maryam Amiri</th>\n                               <th><span class=\"badge badge-success\">Online</span></th>\n                             </tr>\n                             <tr>\n                                <th>1</th>\n                               <th>Maryam Amiri</th>\n                               <th><span class=\"badge badge-danger\">OnRide</span></th>\n                             </tr>\n                             <tr>\n                                <th>1</th>\n                               <th>Maryam Amiri</th>\n                               <th><span class=\"badge badge-success\">Online</span></th>\n                             </tr>\n                            </tbody>\n                          </table>  \n    </div>\n  </div>\n   </div>\n   </div>\n\n   <div class=\"col-md-8\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-rose card-header-icon\">\n        <div class=\"card-icon\">\n          <i class=\"material-icons\">assignment</i>\n        </div>\n        <h4 class=\"card-title\">All Rides</h4>\n      </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>Customer Name</th>\n                        <th>From / Destination Place</th>\n                        <th>From Time</th>\n                        <th>End Time</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr >\n                        <th >1</th>\n                        <td>Mark</td>\n                        <td>Lahore / Karachi</td>\n                        <td>3/10/2019 1:59 AM</td>\n                        <td>3/10/2019 2:30 AM</td>\n                      </tr>\n                    <tr >\n                        <th >1</th>\n                        <td>Mark</td>\n                        <td>Lahore / Karachi</td>\n                        <td>3/10/2019 1:59 AM</td>\n                        <td>3/10/2019 2:30 AM</td>\n                      </tr>\n                      <tr >\n                          <th >1</th>\n                          <td>Mark</td>\n                          <td>Lahore / Karachi</td>\n                          <td>3/10/2019 1:59 AM</td>\n                          <td>3/10/2019 2:30 AM</td>\n                        </tr>\n                        <tr >\n                            <th >1</th>\n                            <td>Mark</td>\n                            <td>Lahore / Karachi</td>\n                            <td>3/10/2019 1:59 AM</td>\n                            <td>3/10/2019 2:30 AM</td>\n                          </tr>\n                           <tr >\n                        <th >1</th>\n                        <td>Mark</td>\n                        <td>Lahore / Karachi</td>\n                        <td>3/10/2019 1:59 AM</td>\n                        <td>3/10/2019 2:30 AM</td>\n                      </tr>\n                      \n                    </tbody>\n                  </table>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-rose card-header-icon\">\n      <div class=\"card-icon\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n      <h4 class=\"card-title\">Planned Rides for Today</h4>\n      <button class=\"btn btn-primary btn-round mat-raised-button pull-right\"   style=\"margin-top:-30px\" mat-raised-button><span class=\"mat-button-wrapper\">Create</span><div class=\"mat-button-ripple mat-ripple\" matripple></div><div class=\"mat-button-focus-overlay\"></div></button>\n    </div>\n      <div class=\"card-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Customer Name</th>\n                      <th>From / Destination Place</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr >\n                      <th >1</th>\n                      <td>Mark</td>\n                      <td>Lahore / Karachi</td>\n                    </tr>\n                    <tr >\n                        <th >1</th>\n                        <td>Mark</td>\n                        <td>Lahore / Karachi</td>\n                      </tr>\n                      <tr >\n                          <th >1</th>\n                          <td>Mark</td>\n                          <td>Lahore / Karachi</td>\n                        </tr>\n                        <tr >\n                            <th >1</th>\n                            <td>Mark</td>\n                            <td>Lahore / Karachi</td>\n                          </tr>\n                    \n                  </tbody>\n                </table>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-rose card-header-icon\">\n      <div class=\"card-icon\">\n        <i class=\"material-icons\">assignment</i>\n      </div>\n      <h4 class=\"card-title\">Planned Today Shift</h4>\n    </div>\n      <div class=\"card-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Driver Name</th>\n                      <th>Car No</th>\n                      <th>Status</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr >\n                      <td>1</td>\n                      <td>Mark</td>\n                      <td>DHQ-986</td>\n                      <td>Online</td>\n                    </tr>\n                    <tr >\n                      <td>1</td>\n                        <td>Mark</td>\n                        <td>DHQ-986</td>\n                        <td>Offline</td>\n                      </tr>\n                      <tr >\n                          <td>1</td>\n                            <td>Mark</td>\n                            <td>DHQ-986</td>\n                            <td>Offline</td>\n                          </tr>\n                          <tr >\n                              <td>1</td>\n                                <td>Mark</td>\n                                <td>DHQ-986</td>\n                                <td>Offline</td>\n                              </tr>\n                  </tbody>\n                  <tfoot>\n                    <td>\n                        <button class=\"btn btn-w-md btn-round btn-primary\" ><i class=\"ti-plus\"></i> &nbsp;  Shift</button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-w-md btn-round btn-danger\"><i class=\"ti-trash\"></i> &nbsp;  delete </button>\n                    </td>\n                    <td></td>\n                  </tfoot>\n                </table>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: centralmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centralmanagerComponent", function() { return centralmanagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var centralmanagerComponent = /** @class */ (function () {
    function centralmanagerComponent() {
    }
    centralmanagerComponent.prototype.ngOnInit = function () {
    };
    centralmanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-centralmanager-cmp',
            template: __webpack_require__(/*! ./centralmanager.component.html */ "./src/app/RIDE-MANAGMENT/administrations/centralmanager/centralmanager.component.html")
        })
    ], centralmanagerComponent);
    return centralmanagerComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-rose card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons\">assignment</i>\n                </div>\n                <h4 class=\"card-title\">Change Password</h4>\n              </div>\n                <div class=\"card-body\">\n                    <div class=\"card-body form-type-round\">\n                        <div class=\"row\">\n          \n          \n                          <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                              <label for=\"input-normal\">Car No.</label>\n                              <input type=\"text\" class=\"form-control\" id=\"input-normal\" >\n                            </div>\n                          </div>\n                          \n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                <label for=\"input-normal\">New Password</label>\n                                <input type=\"text\" class=\"form-control\" id=\"input-normal\" >\n                              </div>\n                            </div>\n          \n                        </div>\n          \n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <button class=\"btn btn-w-md btn-round btn-primary\">Save</button>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                </div>\n                </div>\n                </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: changepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changepasswordComponent", function() { return changepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var changepasswordComponent = /** @class */ (function () {
    function changepasswordComponent() {
    }
    changepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword-cmp',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/RIDE-MANAGMENT/administrations/changepassword/changepassword.component.html")
        })
    ], changepasswordComponent);
    return changepasswordComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-rose card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">assignment</i>\n                  </div>\n                  <h4 class=\"card-title\">Register Driver</h4>\n                  <button class=\"btn btn-primary btn-round mat-raised-button pull-right\" data-toggle=\"modal\" data-target=\"#modal-add\" style=\"margin-top:-30px\" mat-raised-button><span class=\"mat-button-wrapper\">Create</span><div class=\"mat-button-ripple mat-ripple\" matripple></div><div class=\"mat-button-focus-overlay\"></div></button>\n                </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                                  <thead>\n                                      <tr>\n                                        <th class=\"text-center\">#</th>\n                                        <th class=\"text-center\">Driver Name</th>\n                                        <th>Rides</th>\n                                        <th>Status</th>\n                                        <th class=\"text-right\">Action</th>\n                                      </tr>\n                                  </thead>\n                                <tbody>\n                                    <tr>\n                                        <td class=\"text-center\">1</td>\n                                        <td class=\"text-center\">Maryam Amir</td>\n                                        <td>\t20</td>\n                                        <td><span class=\"badge badge-danger\" data-toggle=\"modal\" data-target=\"#modal-fill\">On Ride</span></td>\n                                        <td class=\"td-actions text-right\">\n                                            <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-edit\" class=\"btn btn-success btn-link\">\n                                                <i class=\"material-icons\">edit</i>\n                                            </button>\n                                            <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\">1</td>\n                                        <td class=\"text-center\">Maryam Amir</td>\n                                        <td>\t20</td>\n                                        <td><span class=\"badge badge-danger\">On Ride</span></td>\n                                        <td class=\"td-actions text-right\">\n                                            <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-edit\" class=\"btn btn-success btn-link\">\n                                                <i class=\"material-icons\">edit</i>\n                                            </button>\n                                            <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\">1</td>\n                                        <td class=\"text-center\">Maryam Amir</td>\n                                        <td>\t20</td>\n                                        <td><span class=\"badge badge-danger\">On Ride</span></td>\n                                        <td class=\"td-actions text-right\">\n                                            <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-edit\" class=\"btn btn-success btn-link\">\n                                                <i class=\"material-icons\">edit</i>\n                                            </button>\n                                            <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\">1</td>\n                                        <td class=\"text-center\">Maryam Amir</td>\n                                        <td>\t20</td>\n                                        <td><span class=\"badge badge-danger\">On Ride</span></td>\n                                        <td class=\"td-actions text-right\">\n                                            <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-edit\" class=\"btn btn-success btn-link\">\n                                                <i class=\"material-icons\">edit</i>\n                                            </button>\n                                            <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                   \n                                </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          </div>\n          </div>\n\n          <div class=\"modal fade\" id=\"modal-add\" tabindex=\"-1\" aria-hidden=\"true\" style=\"display: none;\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" id=\"myModalLabel\">Add Driver</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                   <div class=\"row form-type-round\">\n                      <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label for=\"input-normal\">Driver Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"input-normal\" >\n                          </div>\n                        </div>\n  \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"input-normal\">Password</label>\n                              <input type=\"text\" class=\"form-control\" id=\"input-normal\" >\n                            </div>\n                          </div>\n                   </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-bold btn-pure btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-bold btn-pure btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"modal fade\" id=\"modal-edit\" tabindex=\"-1\" aria-hidden=\"true\" style=\"display: none;\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Driver</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                      <span aria-hidden=\"true\">×</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                     <div class=\"row form-type-round\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"input-normal\">Driver Name</label>\n                              <input type=\"text\" class=\"form-control\" id=\"input-normal\" value=\"Maryam Amiri\" />\n                            </div>\n                          </div>\n    \n                          <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                <label for=\"input-normal\">Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"input-normal\" value=\"12344\" />\n                              </div>\n                            </div>\n                     </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-bold btn-pure btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-bold btn-pure btn-primary\">Save changes</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"modal modal-fill fade\" data-backdrop=\"false\" id=\"modal-fill\" tabindex=\"-1\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\">Rides Detail</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <table class=\"table table-sm\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>Customer Name</th>\n                                <th>From / Destination Place</th>\n                                <th>Amount</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr class=\"bg-danger\">\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Lahore / Karachi</td>\n                                <td>2000</td>\n                              </tr>\n        \n                              <tr>\n                                  <th scope=\"row\">1</th>\n                                  <td>Mark</td>\n                                  <td>Lahore / Karachi</td>\n                                  <td>2000</td>\n                                </tr>\n        \n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Lahore / Karachi</td>\n                                    <td>2000</td>\n                                  </tr>\n        \n                                  <tr>\n                                      <th scope=\"row\">1</th>\n                                      <td>Mark</td>\n                                      <td>Lahore / Karachi</td>\n                                      <td>2000</td>\n                                    </tr>\n                            </tbody>\n                          </table>\n                      <br><br><br><br><br><br>\n                    </div>\n                  </div>\n                </div>\n              </div>\n        \n  \n          </div>\n          "

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: registerdriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerdriverComponent", function() { return registerdriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var registerdriverComponent = /** @class */ (function () {
    function registerdriverComponent() {
    }
    registerdriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registerdriver-cmp',
            template: __webpack_require__(/*! ./registerdriver.component.html */ "./src/app/RIDE-MANAGMENT/administrations/registerdriver/registerdriver.component.html")
        })
    ], registerdriverComponent);
    return registerdriverComponent;
}());



/***/ })

}]);
//# sourceMappingURL=RIDE-MANAGMENT-administrations-administrations-module.js.map