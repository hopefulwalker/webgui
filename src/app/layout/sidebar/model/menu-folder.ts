import {MenuItem} from "./menu-item";
export class MenuFolder {
    constructor(public id:string,
                public icon:string,
                public items:MenuItem[],
                public folders:MenuFolder[]) {
    }
}