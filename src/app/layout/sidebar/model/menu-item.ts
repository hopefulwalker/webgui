export class MenuItem {
    constructor(public sysName:string, public id:string, public icon:string, public url:string) {
        this.sysName = sysName;
        this.id = id;
        this.icon = icon;
        this.url = url;
    }
}