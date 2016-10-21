import {Routes, RouterModule} from "@angular/router";

import {LoginComponent} from "./login/index";
import {DashboardRoutes} from "./dashboard/dashboard.routes";

export const AppRoutes:Routes = [
    ...DashboardRoutes,
    {path: '**', component: LoginComponent}
];