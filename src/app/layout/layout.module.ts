import {NgModule} from "@angular/core";
import {DropdownModule} from "ng2-bootstrap/ng2-bootstrap";
import {RouterModule} from "@angular/router";
import {LibraryModule} from "../lib/library.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TopNavComponent} from "./topnav/topnav";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MenuComponent} from "./sidebar/menu.component";
import {MenuFolderComponent} from "./sidebar/menu-folder.component";
import {MenuItemComponent} from "./sidebar/menu-item.component";
import {MenuService} from "./sidebar/model/menu.service";
import {MockMenuService} from "./sidebar/model/mock-menu.service";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, LibraryModule, DropdownModule],
    declarations: [TopNavComponent, SidebarComponent, MenuComponent, MenuFolderComponent, MenuItemComponent],
    exports: [TopNavComponent, SidebarComponent],
    providers: [{provide: MenuService, useClass: MockMenuService}]
})
export class LayoutModule {
}
