"use strict";
var core_1 = require("@angular/core");
var menu_folder_1 = require("./model/menu-folder");
var MenuFolderComponent = (function () {
    function MenuFolderComponent() {
        this.root = true;
        this.expanded = false;
    }
    MenuFolderComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', menu_folder_1.MenuFolder)
    ], MenuFolderComponent.prototype, "folder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MenuFolderComponent.prototype, "root", void 0);
    MenuFolderComponent = __decorate([
        core_1.Component({
            selector: 'ftl-menu-folder',
            templateUrl: './menu-folder.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MenuFolderComponent);
    return MenuFolderComponent;
}());
exports.MenuFolderComponent = MenuFolderComponent;
//# sourceMappingURL=menu-folder.component.js.map