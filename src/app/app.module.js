"use strict";
var core_1 = require("@angular/core");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var async_ng_module_loader_1 = require("./utils/async-ng-module-loader");
var login_module_1 = require("./login/login.module");
var router_1 = require("@angular/router");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var platform_browser_1 = require("@angular/platform-browser");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes),
                login_module_1.LoginModule,
                dashboard_module_1.DashboardModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: async_ng_module_loader_1.AsyncNgModuleLoader }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map