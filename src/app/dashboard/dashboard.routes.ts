import {Route} from '@angular/router';
import {HomeRoutes} from './home/index';
import {NavigationMenuRoutes} from "../navigation-menu/navigation-menu.routes";
import {DashboardComponent} from "./dashboard.component";
import {BlankPageRoutes} from "./blank-page/blank-page.routes";

export const DashboardRoutes:Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...HomeRoutes,
            ...BlankPageRoutes,
            ...NavigationMenuRoutes
        ]        
    }    
];
