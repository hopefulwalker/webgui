"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
var car_service_1 = require("./model/car.service");
var navigation_menu_component_1 = require("./navigation-menu.component");
var common_1 = require("@angular/common");
var NavigationMenuModule = (function () {
    function NavigationMenuModule() {
    }
    NavigationMenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule],
            declarations: [navigation_menu_component_1.NavigationMenuComponent],
            providers: [car_service_1.CarService],
            exports: [navigation_menu_component_1.NavigationMenuComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationMenuModule);
    return NavigationMenuModule;
}());
exports.NavigationMenuModule = NavigationMenuModule;
//# sourceMappingURL=navigation-menu.module.js.map