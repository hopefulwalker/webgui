import {Injectable} from "@angular/core";
import {MenuFolder} from "./menu-folder";
import {MenuItem} from "./menu-item";
import {Observable} from "rxjs/Rx";
import {MenuService} from "./menu.service";

@Injectable()
export class MockMenuService implements MenuService {
    private item_dashboard = new MenuItem('MOCK', '仪表盘', 'fa fa-dashboard fa-fw', 'blank');
    private item_1 = new MenuItem('MOCK', 'item-1', 'fa fa-table fa-fw', 'item-1');
    private item_2 = new MenuItem('MOCK', 'item-2', 'fa fa-search fa-fw', 'item-2');
    private item_3 = new MenuItem('MOCK', 'item-3', 'icon', 'item-3');
    private item_4 = new MenuItem('MOCK', '用户管理', 'fa fa-users fa-fw', 'blankpage');
    private item_5 = new MenuItem('MOCK', '菜单管理', 'fa fa-bars fa-fw', 'navigationmenus');

    private l2_folder_1 = new MenuFolder('MOCK', 'l2_folder-1', 'fa fa-sitemap fa-fw', [this.item_3], null);
    private l2_folder_2 = new MenuFolder('MOCK', 'l2_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2, this.item_3], null);

    private l1_folder_1 = new MenuFolder('MOCK', 'l1_folder-1', 'fa fa-sitemap fa-fw', null, [this.l2_folder_1, this.l2_folder_2]);
    private l1_folder_2 = new MenuFolder('MOCK', 'l1_folder-2', 'fa fa-sitemap fa-fw', [this.item_1, this.item_2], null);

    private l1_folder_3 = new MenuFolder('MOCK', '系统配置', 'fa fa-wrench fa-fw', [this.item_4, this.item_5], null);

    // private folder = new MenuFolder('id',  'icon', [this.l1_folder_3], null);

    private folder = new MenuFolder('MOCK', 'root', 'fa fa-tree fa-fw',
        [this.item_dashboard],
        [this.l1_folder_3]);

    getSynMenuFolder():MenuFolder {
        return this.folder;
    }

    getMenuFolder(target:string):Observable<MenuFolder> {
        // return Observable.of(this.folder);
        if (target == null || target.length <= 0) {
            return Observable.of(this.folder);
        }
        return Observable.of(MockMenuService.copyFolder(this.folder, target));
    }

    static copyFolder(folder:MenuFolder, target:string):MenuFolder {
        if (folder.id.toLowerCase().indexOf(target.toLowerCase()) !== -1) {
            return folder;
        }
        let mother:MenuFolder;
        mother = null;
        if (folder.folders != null) {
            for (let cfolder of folder.folders) {
                let copied = MockMenuService.copyFolder(cfolder, target);
                if (copied != null) {
                    if (mother == null) {
                        mother = new MenuFolder('MOCK', folder.id, folder.icon, null, []);
                    }
                    mother.folders.push(copied);
                }
            }
        }
        if (folder.items != null) {
            for (let citems of folder.items) {
                if (citems.id.toLowerCase().indexOf(target.toLowerCase()) !== -1) {
                    if (mother == null) {
                        mother = new MenuFolder('MOCK', folder.id, folder.icon, [], null);
                    }
                    mother.items.push(citems);
                }
            }
        }
        return mother;
    }
}
//
// let menuService = new MenuService();
//
// console.log(menuService.getMenuFolder());