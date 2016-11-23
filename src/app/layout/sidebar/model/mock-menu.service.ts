import {Injectable} from "@angular/core";
import {MenuFolder} from "./menu-folder";
import {MenuItem} from "./menu-item";
import {Observable} from "rxjs/Rx";
import {MenuService} from "./menu.service";
import {Menu} from "./menu";

@Injectable()
export class MockMenuService implements MenuService {
    private item_dashboard = new MenuItem('仪表盘', 'fa fa-dashboard fa-fw', 'restclient');
    private item_1 = new MenuItem('item-1', 'fa fa-table fa-fw', 'item-1');
    private item_2 = new MenuItem('item-2', 'fa fa-search fa-fw', 'item-2');
    private item_3 = new MenuItem('item-3', 'icon', 'item-3');
    private item_4 = new MenuItem('用户管理', 'fa fa-users fa-fw', 'blankpage');
    private item_5 = new MenuItem('菜单管理', 'fa fa-bars fa-fw', 'navigationmenus');

    private l2_folder_1 = new MenuFolder('l2_folder-1', 'fa fa-sitemap fa-fw', [this.item_3], []);
    private l2_folder_2 = new MenuFolder('l2_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2, this.item_3], []);

    private l1_folder_1 = new MenuFolder('l1_folder-1', 'fa fa-sitemap fa-fw', [], [this.l2_folder_1, this.l2_folder_2]);
    private l1_folder_2 = new MenuFolder('l1_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2], []);

    private l1_folder_3 = new MenuFolder('系统配置', 'fa fa-wrench fa-fw', [this.item_4, this.item_5], []);

    private menu = new Menu('MOCK', [this.item_dashboard], [this.l1_folder_3]);

    getMenu(sysName:string, target:string):Observable<Menu> {
        if (target == null || target.length <= 0) {
            return Observable.of(this.menu);
        }
        return Observable.of(MockMenuService.filterMenu(this.menu, target));
    }

    static filterMenu(menu:Menu, target:string):Menu {
        let filteredMenu = new Menu('MOCK', [], []);

        filteredMenu.items.push(...MockMenuService.filterItems(menu.items, target));

        filteredMenu.folders.push(...MockMenuService.filterFolders(menu.folders, target));

        return filteredMenu;
    }

    static filterItems(items:MenuItem[], target:string):MenuItem[] {
        if (items == null) return [];
        return items.filter(function (item, index, array) {
            return (item.id.toLowerCase().indexOf(target.toLowerCase()) !== -1);
        });
    }

    static filterFolders(folders:MenuFolder[], target:string):MenuFolder[] {
        if (folders == null) return [];
        let filteredFolders:MenuFolder[] = [];
        for (let folder of folders) {
            let filterFolder = MockMenuService.filterFolder(folder, target);
            if (filterFolder) {
                filteredFolders.push(filterFolder);
            }
        }
        return filteredFolders;
    }

    static filterFolder(folder:MenuFolder, target:string):MenuFolder {
        if (folder.id.toLowerCase().indexOf(target.toLowerCase()) !== -1) {
            return folder;
        }
        let mother:MenuFolder = null;
        let childFolders = MockMenuService.filterFolders(folder.folders, target);
        let childItems = MockMenuService.filterItems(folder.items, target);
        if (childFolders.length > 0 || childItems.length > 0) {
            mother = new MenuFolder(folder.id, folder.icon, childItems, childFolders);
        }
        return mother;
    }
}