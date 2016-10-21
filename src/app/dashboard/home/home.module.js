"use strict";
var core_1 = require('@angular/core');
var home_component_1 = require('./home.component');
var common_1 = require("@angular/common");
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_bootstrap_1.DropdownModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map