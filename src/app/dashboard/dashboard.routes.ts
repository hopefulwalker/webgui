import {Route} from '@angular/router';
import {HomeRoutes} from './home/index';
import {NavigationMenuRoutes} from "../navigation-menu/navigation-menu.routes";
import {DashboardComponent} from "./dashboard.component";
import {BlankPageRoutes} from "./blank-page/blank-page.routes";
import {RestClientRoutes} from "../rest-client/rest-client.routes";

export const DashboardRoutes:Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...HomeRoutes,
            ...BlankPageRoutes,
            ...NavigationMenuRoutes,
            ...RestClientRoutes
        ]
    }
];
