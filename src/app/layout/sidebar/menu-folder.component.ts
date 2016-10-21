import {Component, Input, OnChanges} from "@angular/core";
import {MenuFolder} from "./model/menu-folder";
@Component({
    selector: 'ftl-menu-folder',
    templateUrl: './menu-folder.component.html'
})
export class MenuFolderComponent {
    @Input() private folder:MenuFolder;
    @Input() private root:boolean = true;
    private expanded:boolean = false;

    toggle() {
        this.expanded = !this.expanded;
    }
}