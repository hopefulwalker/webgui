"use strict";
var core_1 = require("@angular/core");
var menu_folder_1 = require("./menu-folder");
var menu_item_1 = require("./menu-item");
var Rx_1 = require("rxjs/Rx");
var MockMenuService = (function () {
    function MockMenuService() {
        this.item_dashboard = new menu_item_1.MenuItem('MOCK', '仪表盘', 'fa fa-dashboard fa-fw', 'blank');
        this.item_1 = new menu_item_1.MenuItem('MOCK', 'item-1', 'fa fa-table fa-fw', 'item-1');
        this.item_2 = new menu_item_1.MenuItem('MOCK', 'item-2', 'fa fa-search fa-fw', 'item-2');
        this.item_3 = new menu_item_1.MenuItem('MOCK', 'item-3', 'icon', 'item-3');
        this.item_4 = new menu_item_1.MenuItem('MOCK', '用户管理', 'fa fa-users fa-fw', 'blankpage');
        this.item_5 = new menu_item_1.MenuItem('MOCK', '菜单管理', 'fa fa-bars fa-fw', 'navigationmenus');
        this.l2_folder_1 = new menu_folder_1.MenuFolder('MOCK', 'l2_folder-1', 'fa fa-sitemap fa-fw', [this.item_3], null);
        this.l2_folder_2 = new menu_folder_1.MenuFolder('MOCK', 'l2_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2, this.item_3], null);
        this.l1_folder_1 = new menu_folder_1.MenuFolder('MOCK', 'l1_folder-1', 'fa fa-sitemap fa-fw', null, [this.l2_folder_1, this.l2_folder_2]);
        this.l1_folder_2 = new menu_folder_1.MenuFolder('MOCK', 'l1_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2], null);
        this.l1_folder_3 = new menu_folder_1.MenuFolder('MOCK', '系统配置', 'fa fa-wrench fa-fw', [this.item_4, this.item_5], null);
        // private folder = new MenuFolder('id',  'icon', [this.l1_folder_3], null);
        this.folder = new menu_folder_1.MenuFolder('MOCK', 'root', 'fa fa-tree fa-fw', [this.item_dashboard], [this.l1_folder_3]);
    }
    MockMenuService.prototype.getSynMenuFolder = function () {
        return this.folder;
    };
    MockMenuService.prototype.getMenuFolder = function (target) {
        // return Observable.of(this.folder);
        if (target == null || target.length <= 0) {
            return Rx_1.Observable.of(this.folder);
        }
        return Rx_1.Observable.of(MockMenuService.copyFolder(this.folder, target));
    };
    MockMenuService.copyFolder = function (folder, target) {
        if (folder.id.toLowerCase().indexOf(target.toLowerCase()) !== -1) {
            return folder;
        }
        var mother;
        mother = null;
        if (folder.folders != null) {
            for (var _i = 0, _a = folder.folders; _i < _a.length; _i++) {
                var cfolder = _a[_i];
                var copied = MockMenuService.copyFolder(cfolder, target);
                if (copied != null) {
                    if (mother == null) {
                        mother = new menu_folder_1.MenuFolder('MOCK', folder.id, folder.icon, null, []);
                    }
                    mother.folders.push(copied);
                }
            }
        }
        if (folder.items != null) {
            for (var _b = 0, _c = folder.items; _b < _c.length; _b++) {
                var citems = _c[_b];
                if (citems.id.toLowerCase().indexOf(target.toLowerCase()) !== -1) {
                    if (mother == null) {
                        mother = new menu_folder_1.MenuFolder('MOCK', folder.id, folder.icon, [], null);
                    }
                    mother.items.push(citems);
                }
            }
        }
        return mother;
    };
    MockMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockMenuService);
    return MockMenuService;
}());
exports.MockMenuService = MockMenuService;
//
// let menuService = new MenuService();
//
// console.log(menuService.getMenuFolder()); 
//# sourceMappingURL=mock-menu.service.js.map