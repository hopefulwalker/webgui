import {MenuService} from "./menu.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {MenuFolder} from "./menu-folder";
import {Menu} from "./menu";
@Injectable()
export class RestMenuService implements MenuService {
    getMenu(sysName:string, target:string):Observable<Menu> {
        return Observable.of(null);
    }
}