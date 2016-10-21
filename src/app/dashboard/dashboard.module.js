"use strict";
var core_1 = require("@angular/core");
var home_module_1 = require("./home/home.module");
var blank_page_module_1 = require("./blank-page/blank-page.module");
var dashboard_component_1 = require("./dashboard.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var layout_module_1 = require("../layout/layout.module");
var navigation_menu_module_1 = require("../navigation-menu/navigation-menu.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                layout_module_1.LayoutModule,
                home_module_1.HomeModule,
                blank_page_module_1.BlankPageModule,
                navigation_menu_module_1.NavigationMenuModule
            ],
            declarations: [dashboard_component_1.DashboardComponent],
            exports: [dashboard_component_1.DashboardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map