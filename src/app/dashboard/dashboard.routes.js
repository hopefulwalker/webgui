"use strict";
var index_1 = require('./home/index');
var navigation_menu_routes_1 = require("../navigation-menu/navigation-menu.routes");
var dashboard_component_1 = require("./dashboard.component");
var blank_page_routes_1 = require("./blank-page/blank-page.routes");
exports.DashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: index_1.HomeRoutes.concat(blank_page_routes_1.BlankPageRoutes, navigation_menu_routes_1.NavigationMenuRoutes)
    }
];
//# sourceMappingURL=dashboard.routes.js.map