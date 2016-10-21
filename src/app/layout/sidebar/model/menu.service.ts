import {Injectable} from "@angular/core";
import {MenuFolder} from "./menu-folder";
import {Observable} from "rxjs/Rx";

@Injectable()
export abstract class MenuService {
    abstract getSynMenuFolder():MenuFolder ;

    abstract getMenuFolder(target:string):Observable<MenuFolder>;
}