"use strict";
var index_1 = require("./login/index");
var dashboard_routes_1 = require("./dashboard/dashboard.routes");
exports.AppRoutes = dashboard_routes_1.DashboardRoutes.concat([
    { path: '**', component: index_1.LoginComponent }
]);
//# sourceMappingURL=app.routes.js.map