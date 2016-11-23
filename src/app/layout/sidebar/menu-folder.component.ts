import {Component, Input} from "@angular/core";
import {MenuFolder} from "./model/menu-folder";
@Component({
    selector: 'ftl-menu-folder',
    templateUrl: './menu-folder.component.html'
})
export class MenuFolderComponent {
    @Input() private folder:MenuFolder;
    private expanded:boolean = false;

    toggle() {
        this.expanded = !this.expanded;
    }
}