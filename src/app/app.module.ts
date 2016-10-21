import {NgModule, NgModuleFactoryLoader} from "@angular/core";
import {AppRoutes} from "./app.routes";
import {AppComponent} from "./app.component";
import {AsyncNgModuleLoader} from "./utils/async-ng-module-loader";
import {LoginModule} from "./login/login.module";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./dashboard/dashboard.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        LoginModule,
        DashboardModule
    ],
    declarations: [AppComponent],
    providers: [
        {provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}