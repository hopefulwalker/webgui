import {MenuItem} from "./menu-item";
export class MenuFolder {
    constructor(public sysName:string,
                public id:string,
                public icon:string,
                public items:MenuItem[],
                public folders:MenuFolder[]) {
    }
}