import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {DataTableModule, SharedModule} from "primeng/primeng";
import {CarService} from "./model/car.service";
import {NavigationMenuComponent} from "./navigation-menu.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule, DataTableModule, SharedModule, HttpModule],
    declarations: [NavigationMenuComponent],
    providers: [CarService],
    exports: [NavigationMenuComponent]
})

export class NavigationMenuModule {
}
