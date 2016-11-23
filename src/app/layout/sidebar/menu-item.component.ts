import {Component, Input} from "@angular/core";
import {MenuItem} from "./model/menu-item";
@Component({
    selector: 'ftl-menu-item',
    templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
    @Input() private item:MenuItem;
}