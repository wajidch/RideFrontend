(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./RIDE-MANAGMENT/administrations/administrations.module": [
		"./src/app/RIDE-MANAGMENT/administrations/administrations.module.ts",
		"RIDE-MANAGMENT-administrations-administrations-module"
	],
	"./RIDE-MANAGMENT/dashboard/dashboard.module": [
		"./src/app/RIDE-MANAGMENT/dashboard/dashboard.module.ts",
		"RIDE-MANAGMENT-dashboard-dashboard-module"
	],
	"./RIDE-MANAGMENT/driverpage/driverpage.module": [
		"./src/app/RIDE-MANAGMENT/driverpage/driverpage.module.ts",
		"RIDE-MANAGMENT-driverpage-driverpage-module"
	],
	"./RIDE-MANAGMENT/pages/pages.module": [
		"./src/app/RIDE-MANAGMENT/pages/pages.module.ts",
		"RIDE-MANAGMENT-pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-background-color=\"red\" data-image=\"../assets/img/sidebar-1.jpg\">\n        <app-sidebar-cmp></app-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar-cmp></app-navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <app-footer-cmp></app-footer-cmp>\n        </div>\n    </div>\n    <app-fixedplugin></app-fixedplugin>\n</div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../md/md.module */ "./src/app/RIDE-MANAGMENT/md/md.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Account' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Material Dashboard Pro Angular</a>\n    </div>\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\n            <i class=\"material-icons\">lock_open</i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element) {
        this.router = router;
        this.element = element;
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.sidebarClose();
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1JJREUtTUFOQUdNRU5UL21kL21kLWNoYXJ0L21kLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: ChartType, MdChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChartComponent", function() { return MdChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    var MdChartComponent_1;
    MdChartComponent.currentId = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-chart',
            template: __webpack_require__(/*! ./md-chart.component.html */ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__(/*! ./md-chart.component.css */ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.ts ***!
  \******************************************************************/
/*! exports provided: MdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTableComponent", function() { return MdTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-table',
            template: __webpack_require__(/*! ./md-table.component.html */ "./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/md/md.module.ts":
/*!************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/md/md.module.ts ***!
  \************************************************/
/*! exports provided: NavItemType, MdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemType", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModule", function() { return MdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-table/md-table.component */ "./src/app/RIDE-MANAGMENT/md/md-table/md-table.component.ts");
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md-chart/md-chart.component */ "./src/app/RIDE-MANAGMENT/md/md-chart/md-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ],
            exports: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1JJREUtTUFOQUdNRU5UL3NoYXJlZC9maXhlZHBsdWdpbi9maXhlZHBsdWdpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\n<!-- <div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\"> Sidebar Filters</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                  <div class=\"ml-auto mr-auto\">\n                    <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    <span class=\"badge filter badge-azure active\" data-color=\"azure\"></span>\n                    <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                    <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                    <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\n                  </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <div class=\"ml-auto mr-auto\">\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"red\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Mini</p>\n                  <label class=\"ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-mini\">\n                      <label>\n                          <input type=\"checkbox\">\n                              <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Images</p>\n                  <label class=\"switch-mini ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-image\">\n                      <label>\n                          <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"header-title\">Images</li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-1.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-2.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-3.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-4.jpg\" alt=\"\" />\n                </a>\n            </li>\n        </ul>\n    </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.ts ***!
  \****************************************************************************/
/*! exports provided: FixedpluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginComponent", function() { return FixedpluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var $sidebar = $('.sidebar');
        $sidebar.attr('data-background-color', "black");
        $sidebar.attr('background-image', 'url("sidebar-5")');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $sidebar_img_container.css('background-image', 'url("")');
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixedplugin',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__(/*! ./fixedplugin.component.css */ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.module.ts ***!
  \*************************************************************************/
/*! exports provided: FixedpluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginModule", function() { return FixedpluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n  <div class=\"container\">\n    <nav class=\"pull-left\">\n      \n    </nav>\n    <div class=\"copyright pull-right\">\n      \n      \n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/RIDE-MANAGMENT/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/footer/footer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/footer/footer.module.ts ***!
  \***************************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/RIDE-MANAGMENT/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}}</a>\n    </div>\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <form class=\"navbar-form\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#pablo\">\n            <i class=\"material-icons\">dashboard</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\">notifications</i>\n            <span class=\"notification\">5</span>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n            <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n            <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n            <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n            <a class=\"dropdown-item\" href=\"#\">Another One</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#pablo\">\n            <i class=\"material-icons\">person</i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                // $('.sidebar').addClass('animation');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function (event) {
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    console.log('aici');
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    var subtitleI = this.listTitles[i].path + '/I' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                    if (subtitleI === titlee) {
                        return this.listTitles[i].children[j].title + " Formulaire";
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/shared/navbar/navbar.module.ts ***!
  \***************************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n          <a class=\"simple-text logo-mini\">\n            <div class=\"logo-img\">\n                \n            </div>\n          </a>\n            <a href=\"#\" class=\"simple-text logo-normal\">\n              APP\n            </a>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                    \n                </div>\n                <div class=\"user-info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            Admin\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#noticeModal\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">MP</span>\n                                    <span class=\"sidebar-normal\">My Profile</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">EP</span>\n                                    <span class=\"sidebar-normal\">Edit Profile</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">S</span>\n                                    <span class=\"sidebar-normal\">Settings</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"isMobileMenu()\">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\"><div class=\"input-group no-border\">\n                  <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                  <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i>\n                    <div class=\"ripple-container\"></div>\n                  </button>\n                </div></span>\n              </form>\n              <ul class=\"nav navbar-nav nav-mobile-menu\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p>\n                      <span class=\"d-lg-none d-md-block\">Stats</span>\n                    </p>\n                  </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">5</span>\n                    <p>\n                      <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                    </p>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                  </div>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#pablo\">\n                    <i class=\"material-icons\">person</i>\n                    <p>\n                      <span class=\"d-lg-none d-md-block\">Account</span>\n                    </p>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <ul class=\"nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n                    <!--If is a single link-->\n                    <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}</p>\n                    </a>\n                    <!--If it have a submenu-->\n                    <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                        <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                    </a>\n\n                    <!--Display the submenu items-->\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\n                                <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n\n\n        <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-notice\">\n              <div class=\"modal-content\" style=\"width:150%\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"myModalLabel\">Edit Profile</h5>\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  \n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                              <input placeholder=\"First Name\" type=\"text\" class=\"form-control\" />\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input placeholder=\"Last Name\" type=\"text\" class=\"form-control\" />\n                  </div>\n                  <div class=\"col-md-6\">\n                      <input placeholder=\"Email\" type=\"text\" class=\"form-control\" />\n              </div>\n              <div class=\"col-md-6\">\n                  <input placeholder=\"Profile Name\" type=\"text\" class=\"form-control\" />\n          </div>\n          <div class=\"col-md-6\">\n              <input placeholder=\"City\" type=\"text\" class=\"form-control\" />\n      </div>\n      <div class=\"col-md-6\">\n          <input placeholder=\"Address\" type=\"text\" class=\"form-control\" />\n  </div>\n  <div class=\"col-md-6\">\n      <input placeholder=\"Date of Birth\" type=\"text\" class=\"form-control\" />\n</div>\n\n\n                      \n                    </div>\n                  \n                  \n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Save</button>\n                </div>\n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Menu Items
var ROUTES = [{
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
            { path: 'RegisterDriver', title: 'RegisterDriver', ab: 'B' },
            { path: 'allrides', title: 'allrides', ab: 'P' },
            { path: 'centralmanager', title: 'Central Manager', ab: 'CM' },
            { path: 'changepassword', title: 'Change Password', ab: 'CP' },
            { path: 'adminoverview', title: 'adminoverview', ab: 'AO' },
        ]
    },
    {
        path: '/driverpage',
        title: 'Driver Page',
        type: 'sub',
        icontype: 'apps',
        collapse: 'driverpage',
        children: [
            { path: 'createride', title: 'createride', ab: 'CR' },
            { path: 'driver', title: 'Driver Detail', ab: 'DD' },
        ]
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        });
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        });
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/RIDE-MANAGMENT/sidebar/sidebar.module.ts ***!
  \**********************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _RIDE_MANAGMENT_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RIDE-MANAGMENT/sidebar/sidebar.module */ "./src/app/RIDE-MANAGMENT/sidebar/sidebar.module.ts");
/* harmony import */ var _RIDE_MANAGMENT_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RIDE-MANAGMENT/shared/footer/footer.module */ "./src/app/RIDE-MANAGMENT/shared/footer/footer.module.ts");
/* harmony import */ var _RIDE_MANAGMENT_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RIDE-MANAGMENT/shared/navbar/navbar.module */ "./src/app/RIDE-MANAGMENT/shared/navbar/navbar.module.ts");
/* harmony import */ var _RIDE_MANAGMENT_shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.module */ "./src/app/RIDE-MANAGMENT/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _RIDE_MANAGMENT_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RIDE-MANAGMENT/layouts/admin/admin-layout.component */ "./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _RIDE_MANAGMENT_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RIDE-MANAGMENT/layouts/auth/auth-layout.component */ "./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/dataService */ "./src/app/services/dataService.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 // this line you need













var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_17__["AppRoutes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _RIDE_MANAGMENT_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
                _RIDE_MANAGMENT_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__["NavbarModule"],
                _RIDE_MANAGMENT_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
                _RIDE_MANAGMENT_shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__["FixedpluginModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_8__["AmazingTimePickerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _RIDE_MANAGMENT_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
                _RIDE_MANAGMENT_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__["AuthLayoutComponent"],
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_19__["ApiService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _services_dataService__WEBPACK_IMPORTED_MODULE_20__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _RIDE_MANAGMENT_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RIDE-MANAGMENT/layouts/admin/admin-layout.component */ "./src/app/RIDE-MANAGMENT/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _RIDE_MANAGMENT_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RIDE-MANAGMENT/layouts/auth/auth-layout.component */ "./src/app/RIDE-MANAGMENT/layouts/auth/auth-layout.component.ts");


var AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _RIDE_MANAGMENT_layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './RIDE-MANAGMENT/dashboard/dashboard.module#DashboardModule',
            }, {
                path: 'administrations',
                loadChildren: './RIDE-MANAGMENT/administrations/administrations.module#AdministrationsModule'
            },
            {
                path: 'driverpage',
                loadChildren: './RIDE-MANAGMENT/driverpage/driverpage.module#DriverPage'
            },
        ]
    }, {
        path: '',
        component: _RIDE_MANAGMENT_layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'pages',
                loadChildren: './RIDE-MANAGMENT/pages/pages.module#PagesModule'
            }]
    }
];


/***/ }),

/***/ "./src/app/models/appelOffre.models.ts":
/*!*********************************************!*\
  !*** ./src/app/models/appelOffre.models.ts ***!
  \*********************************************/
/*! exports provided: AppelOffre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppelOffre", function() { return AppelOffre; });
var AppelOffre = /** @class */ (function () {
    function AppelOffre() {
    }
    Object.defineProperty(AppelOffre.prototype, "idAppelOffre", {
        get: function () {
            return this._idAppelOffre;
        },
        set: function (idAppelOffre) {
            this._idAppelOffre = idAppelOffre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "numAO", {
        get: function () {
            return this._numAO;
        },
        set: function (numAO) {
            this._numAO = numAO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "objetAO", {
        get: function () {
            return this._objetAO;
        },
        set: function (objetAO) {
            this._objetAO = objetAO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "modePassation", {
        get: function () {
            return this._modePassation;
        },
        set: function (modePassation) {
            this._modePassation = modePassation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "intituleAO", {
        get: function () {
            return this._intituleAO;
        },
        set: function (intituleAO) {
            this._intituleAO = intituleAO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "dateInsertionAR", {
        get: function () {
            return this._dateInsertionAR;
        },
        set: function (dateInsertionAR) {
            this._dateInsertionAR = dateInsertionAR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "dateInsertionFR", {
        get: function () {
            return this._dateInsertionFR;
        },
        set: function (dateInsertionFR) {
            this._dateInsertionFR = dateInsertionFR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "dateInsertionPMP", {
        get: function () {
            return this._dateInsertionPMP;
        },
        set: function (dateInsertionPMP) {
            this._dateInsertionPMP = dateInsertionPMP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "dateHeureOuverture", {
        get: function () {
            return this._dateHeureOuverture;
        },
        set: function (dateHeureOuverture) {
            this._dateHeureOuverture = dateHeureOuverture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "montantEstimation", {
        get: function () {
            return this._montantEstimation;
        },
        set: function (montantEstimation) {
            this._montantEstimation = montantEstimation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "entrepriseRetenue", {
        get: function () {
            return this._entrepriseRetenue;
        },
        set: function (entrepriseRetenue) {
            this._entrepriseRetenue = entrepriseRetenue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "offreRetenue", {
        get: function () {
            return this._offreRetenue;
        },
        set: function (offreRetenue) {
            this._offreRetenue = offreRetenue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "cahierChargeFiles", {
        get: function () {
            return this._cahierChargeFiles;
        },
        set: function (cahierChargeFiles) {
            this._cahierChargeFiles = cahierChargeFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "decisionCommissionFiles", {
        get: function () {
            return this._decisionCommissionFiles;
        },
        set: function (decisionCommissionFiles) {
            this._decisionCommissionFiles = decisionCommissionFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "avisAOFiles", {
        get: function () {
            return this._avisAOFiles;
        },
        set: function (avisAOFiles) {
            this._avisAOFiles = avisAOFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "estimationFiles", {
        get: function () {
            return this._estimationFiles;
        },
        set: function (estimationFiles) {
            this._estimationFiles = estimationFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "pvOPFiles", {
        get: function () {
            return this._pvOPFiles;
        },
        set: function (pvOPFiles) {
            this._pvOPFiles = pvOPFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "offreFrancieresFiles", {
        get: function () {
            return this._offreFrancieresFiles;
        },
        set: function (offreFrancieresFiles) {
            this._offreFrancieresFiles = offreFrancieresFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "marche", {
        get: function () {
            return this._marche;
        },
        set: function (marche) {
            this._marche = marche;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "projet", {
        get: function () {
            return this._projet;
        },
        set: function (projet) {
            this._projet = projet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "correspondances", {
        get: function () {
            return this._correspondances;
        },
        set: function (correspondances) {
            this._correspondances = correspondances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppelOffre.prototype, "reunions", {
        get: function () {
            return this._reunions;
        },
        set: function (reunions) {
            this._reunions = reunions;
        },
        enumerable: true,
        configurable: true
    });
    return AppelOffre;
}());



/***/ }),

/***/ "./src/app/models/convention.models.ts":
/*!*********************************************!*\
  !*** ./src/app/models/convention.models.ts ***!
  \*********************************************/
/*! exports provided: Convention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convention", function() { return Convention; });
var Convention = /** @class */ (function () {
    function Convention() {
    }
    Object.defineProperty(Convention.prototype, "idConvention", {
        get: function () {
            return this._idConvention;
        },
        set: function (idConvention) {
            this._idConvention = idConvention;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "objetConvention", {
        get: function () {
            return this._objetConvention;
        },
        set: function (objetConvention) {
            this._objetConvention = objetConvention;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "dateSignature", {
        get: function () {
            return this._dateSignature;
        },
        set: function (dateSignature) {
            this._dateSignature = dateSignature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "coutGlobal", {
        get: function () {
            return this._coutGlobal;
        },
        set: function (coutGlobal) {
            this._coutGlobal = coutGlobal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "conventionFile", {
        get: function () {
            return this._conventionFile;
        },
        set: function (conventionFile) {
            this._conventionFile = conventionFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "reunions", {
        get: function () {
            return this._reunions;
        },
        set: function (reunions) {
            this._reunions = reunions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "conventionsPartenaires", {
        get: function () {
            return this._conventionsPartenaires;
        },
        set: function (conventionsPartenaires) {
            this._conventionsPartenaires = conventionsPartenaires;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "recouvrement", {
        get: function () {
            return this._recouvrement;
        },
        set: function (recouvrement) {
            this._recouvrement = recouvrement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "projets", {
        get: function () {
            return this._projets;
        },
        set: function (projets) {
            this._projets = projets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Convention.prototype, "correspondances", {
        get: function () {
            return this._correspondances;
        },
        set: function (correspondances) {
            this._correspondances = correspondances;
        },
        enumerable: true,
        configurable: true
    });
    return Convention;
}());



/***/ }),

/***/ "./src/app/models/marche.models.ts":
/*!*****************************************!*\
  !*** ./src/app/models/marche.models.ts ***!
  \*****************************************/
/*! exports provided: Marche */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marche", function() { return Marche; });
var Marche = /** @class */ (function () {
    function Marche() {
    }
    Object.defineProperty(Marche.prototype, "NUMERO_MARCHE", {
        get: function () {
            return this._NUMERO_MARCHE;
        },
        set: function (NUMERO_MARCHE) {
            this._NUMERO_MARCHE = NUMERO_MARCHE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "intituleMarche", {
        get: function () {
            return this._intituleMarche;
        },
        set: function (intituleMarche) {
            this._intituleMarche = intituleMarche;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "idMarche", {
        get: function () {
            return this._idMarche;
        },
        set: function (idMarche) {
            this._idMarche = idMarche;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "numMarche", {
        get: function () {
            return this._numMarche;
        },
        set: function (numMarche) {
            this._numMarche = numMarche;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "delaiMarche", {
        get: function () {
            return this._delaiMarche;
        },
        set: function (delaiMarche) {
            this._delaiMarche = delaiMarche;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "dateApprobation", {
        get: function () {
            return this._dateApprobation;
        },
        set: function (dateApprobation) {
            this._dateApprobation = dateApprobation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "dateOS", {
        get: function () {
            return this._dateOS;
        },
        set: function (dateOS) {
            this._dateOS = dateOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "dateRP", {
        get: function () {
            return this._dateRP;
        },
        set: function (dateRP) {
            this._dateRP = dateRP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "dateRD", {
        get: function () {
            return this._dateRD;
        },
        set: function (dateRD) {
            this._dateRD = dateRD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "ordreApprobationFiles", {
        get: function () {
            return this._ordreApprobationFiles;
        },
        set: function (ordreApprobationFiles) {
            this._ordreApprobationFiles = ordreApprobationFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "ordreServiceFiles", {
        get: function () {
            return this._ordreServiceFiles;
        },
        set: function (ordreServiceFiles) {
            this._ordreServiceFiles = ordreServiceFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "receptionProvisoireFiles", {
        get: function () {
            return this._receptionProvisoireFiles;
        },
        set: function (receptionProvisoireFiles) {
            this._receptionProvisoireFiles = receptionProvisoireFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "marcheFiles", {
        get: function () {
            return this._marcheFiles;
        },
        set: function (marcheFiles) {
            this._marcheFiles = marcheFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "receptionDefinitiveFiles", {
        get: function () {
            return this._receptionDefinitiveFiles;
        },
        set: function (receptionDefinitiveFiles) {
            this._receptionDefinitiveFiles = receptionDefinitiveFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "situations", {
        get: function () {
            return this._situations;
        },
        set: function (situations) {
            this._situations = situations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "plans", {
        get: function () {
            return this._plans;
        },
        set: function (plans) {
            this._plans = plans;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        set: function (actions) {
            this._actions = actions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "documents", {
        get: function () {
            return this._documents;
        },
        set: function (documents) {
            this._documents = documents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "ordresAR", {
        get: function () {
            return this._ordresAR;
        },
        set: function (ordresAR) {
            this._ordresAR = ordresAR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "avenants", {
        get: function () {
            return this._avenants;
        },
        set: function (avenants) {
            this._avenants = avenants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "reunions", {
        get: function () {
            return this._reunions;
        },
        set: function (reunions) {
            this._reunions = reunions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "correspondances", {
        get: function () {
            return this._correspondances;
        },
        set: function (correspondances) {
            this._correspondances = correspondances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "decomptes", {
        get: function () {
            return this._decomptes;
        },
        set: function (decomptes) {
            this._decomptes = decomptes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "appelOffre", {
        get: function () {
            return this._appelOffre;
        },
        set: function (appelOffre) {
            this._appelOffre = appelOffre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "engagementFiles", {
        get: function () {
            return this._engagementFiles;
        },
        set: function (engagementFiles) {
            this._engagementFiles = engagementFiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marche.prototype, "entreprises", {
        get: function () {
            return this._entreprises;
        },
        set: function (entreprises) {
            this._entreprises = entreprises;
        },
        enumerable: true,
        configurable: true
    });
    return Marche;
}());



/***/ }),

/***/ "./src/app/models/projet.models.ts":
/*!*****************************************!*\
  !*** ./src/app/models/projet.models.ts ***!
  \*****************************************/
/*! exports provided: Projet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projet", function() { return Projet; });
var Projet = /** @class */ (function () {
    function Projet() {
    }
    Object.defineProperty(Projet.prototype, "idProjet", {
        get: function () {
            return this._idProjet;
        },
        set: function (idProjet) {
            this._idProjet = idProjet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "numProjet", {
        get: function () {
            return this._numProjet;
        },
        set: function (numProjet) {
            this._numProjet = numProjet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "projetFile", {
        get: function () {
            return this._projetFile;
        },
        set: function (projetFile) {
            this._projetFile = projetFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "missionProjet", {
        get: function () {
            return this._missionProjet;
        },
        set: function (missionProjet) {
            this._missionProjet = missionProjet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "localite", {
        get: function () {
            return this._localite;
        },
        set: function (localite) {
            this._localite = localite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "plans", {
        get: function () {
            return this._plans;
        },
        set: function (plans) {
            this._plans = plans;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "intervenants", {
        get: function () {
            return this._intervenants;
        },
        set: function (intervenants) {
            this._intervenants = intervenants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "appelsOffre", {
        get: function () {
            return this._appelsOffre;
        },
        set: function (appelsOffre) {
            this._appelsOffre = appelsOffre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projet.prototype, "convention", {
        get: function () {
            return this._convention;
        },
        set: function (convention) {
            this._convention = convention;
        },
        enumerable: true,
        configurable: true
    });
    return Projet;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.ACTION = 'action';
        this.APPELOFFRE = 'appelOffre';
        this.AVENANT = 'avenant';
        this.CONVENTION = 'convention';
        this.CORRESPONDANCE = 'correspondance';
        this.CORRESPONDANCESTATUS = 'correspondanceStatus';
        this.DECOMPTE = 'decompte';
        this.DOCUMENT = 'document';
        this.INTERVENANT = 'intervenant';
        this.LOCALITE = 'localite';
        this.MARCHE = 'marche';
        this.MISSION = 'mission';
        this.ORDREARRETREPRISE = 'ordreArretReprise';
        this.PARTENAIRE = 'partenaire';
        this.PIECEJOINTE = 'piecejointe';
        this.PLAN = 'plan';
        this.PROJET = 'projet';
        this.RECOUVREMENT = 'recouvrement';
        this.REUNION = 'reunion';
        this.SITUATION = 'situation';
        this.headers.set("Access-Control-Allow-Origin", "*");
    }
    // ------------------------------
    // ---------- GET ---------------
    // ------------------------------
    // API: GET /objType
    ApiService.prototype.getAll = function (objType) {
        return this.httpClient.get(this.API_URL + objType);
    };
    // API: GET /objType/{id}
    ApiService.prototype.getAllFilterBy = function (objType, idVal) {
        return this.httpClient.get(this.API_URL + objType + '/' + idVal);
    };
    // ------------------------------
    // ---------- POST --------------
    // ------------------------------
    // API: POST /objType/add/{action}
    ApiService.prototype.createObj = function (objType, obj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        this.headers.set("Access-Control-Allow-Origin", "*");
        this.headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        //params = this.params_ALL[objType](this.typeCastAs(objType, obj));
        params = params.append(objType, obj);
        var mType = this.httpClient.post(this.API_URL + objType + '/add/', obj, { headers: this.headers })
            .subscribe(function (value) {
            console.log('TASK: ' + value['task'] + '\n' +
                'STATUS: ' + value['status'] + '\n');
        });
        console.log("@@@@ TYPE OF");
        console.log(typeof mType);
        return mType;
    };
    // ------------------------------
    // ---------- PUT --------------
    // ------------------------------
    // API: PUT /objType/update/{action}
    ApiService.prototype.updateAction = function (objType, obj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        // params = this.params_ALL[objType](this.typeCastAs(objType, obj));
        params = params.append(objType, obj);
        return this.httpClient.put(this.API_URL + objType + '/update/', params);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.headers.set("Access-Control-Allow-Origin", "*");
    }
    // ------------------------------
    // ---------- POST --------------
    // ------------------------------
    // API: POST /objType/add/{action}
    AuthService.prototype.login = function (username, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        this.headers.set("Access-Control-Allow-Origin", "*");
        this.headers.set('Access-Control-Allow-Methods', 'POST');
        this.headers.set('observe', 'body');
        return this.httpClient.post(this.API_URL + 'login', { "username": username, "password": password }, { responseType: 'text' })
            .subscribe(function (data) {
            localStorage.setItem('token', data);
            localStorage.setItem('error', null);
            localStorage.setItem('status', "200");
            localStorage.setItem('redirectTo', "/dashboard");
        }, function (err) {
            localStorage.setItem('token', null);
            localStorage.setItem('error', err.error);
            localStorage.setItem('status', err.status);
            localStorage.setItem('redirectTo', null);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        //return !this.jwtHelper.isTokenExpired(token);
        return true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/dataService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dataService.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_models_projet_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/projet.models */ "./src/app/models/projet.models.ts");
/* harmony import */ var app_models_marche_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/marche.models */ "./src/app/models/marche.models.ts");
/* harmony import */ var app_models_convention_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/convention.models */ "./src/app/models/convention.models.ts");
/* harmony import */ var app_models_appelOffre_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/appelOffre.models */ "./src/app/models/appelOffre.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSourcePr = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new app_models_projet_models__WEBPACK_IMPORTED_MODULE_2__["Projet"]());
        this.messageSourceMa = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new app_models_marche_models__WEBPACK_IMPORTED_MODULE_3__["Marche"]());
        this.messageSourceCo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new app_models_convention_models__WEBPACK_IMPORTED_MODULE_4__["Convention"]());
        this.messageSourceAo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new app_models_appelOffre_models__WEBPACK_IMPORTED_MODULE_5__["AppelOffre"]());
        this.messageSourcePh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.messageSourcePhObj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ 'phase': '', 'obj': null });
        this.currentMessagePr = this.messageSourcePr.asObservable();
        this.currentMessageMa = this.messageSourceMa.asObservable();
        this.currentMessageCo = this.messageSourceCo.asObservable();
        this.currentMessageAo = this.messageSourceAo.asObservable();
        this.currentMessagePh = this.messageSourcePh.asObservable();
        this.currentMessagePhObj = this.messageSourcePhObj.asObservable();
    }
    DataService.prototype.changeMessagePr = function (message) {
        this.messageSourcePr.next(message);
    };
    DataService.prototype.changeMessageMa = function (message) {
        this.messageSourceMa.next(message);
    };
    DataService.prototype.changeMessageCo = function (message) {
        this.messageSourceCo.next(message);
    };
    DataService.prototype.changeMessageAo = function (message) {
        this.messageSourceAo.next(message);
    };
    DataService.prototype.changeMessagePh = function (message) {
        this.messageSourcePh.next(message);
    };
    DataService.prototype.changeMessagePhObj = function (message) {
        this.messageSourcePhObj.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // URL of development API
    apiUrl: 'http://localhost:8080/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hasI5\source\repos\med_redouan-angular_tasks-69dc7199b2de\med_redouan-angular_tasks-69dc7199b2de\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map