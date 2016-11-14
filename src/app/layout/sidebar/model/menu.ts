import {MenuFolder} from "./menu-folder";
import {MenuItem} from "./menu-item";
export class Menu {
    constructor(public sysName:string,
                public items:MenuItem[],
                public folders:MenuFolder[]) {
    }
}
