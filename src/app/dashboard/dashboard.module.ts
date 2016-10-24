import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
import {BlankPageModule} from "./blank-page/blank-page.module";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "../layout/layout.module";
import {NavigationMenuModule} from "../navigation-menu/navigation-menu.module";
import {RestClientModule} from "../rest-client/rest-client.module";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        LayoutModule,
        HomeModule,
        BlankPageModule,
        NavigationMenuModule,
        RestClientModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
