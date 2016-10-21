"use strict";
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var router_1 = require("@angular/router");
var library_module_1 = require("../lib/library.module");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var topnav_1 = require("./topnav/topnav");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var menu_folder_component_1 = require("./sidebar/menu-folder.component");
var menu_service_1 = require("./sidebar/model/menu.service");
var mock_menu_service_1 = require("./sidebar/model/mock-menu.service");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, library_module_1.LibraryModule, ng2_bootstrap_1.DropdownModule],
            declarations: [topnav_1.TopNavComponent, sidebar_component_1.SidebarComponent, menu_folder_component_1.MenuFolderComponent],
            exports: [topnav_1.TopNavComponent, sidebar_component_1.SidebarComponent],
            providers: [{ provide: menu_service_1.MenuService, useClass: mock_menu_service_1.MockMenuService }]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map