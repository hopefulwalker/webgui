import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Menu} from "./menu";

@Injectable()
export abstract class MenuService {
    abstract getMenu(sysName:string, target:string):Observable<Menu>;
}