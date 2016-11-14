import {Injectable} from "@angular/core";
import {MenuFolder} from "./menu-folder";
import {Observable} from "rxjs/Rx";
import {Menu} from "./menu";

@Injectable()
export abstract class MenuService {
    abstract getSynMenuFolder():MenuFolder ;

    abstract getMenuFolder(target:string):Observable<MenuFolder>;

    abstract getMenu(sysName:string, target:string):Observable<Menu>;
}