import {Component, Input} from "@angular/core";
import {Menu} from "./model/menu";
@Component({
    selector: 'ftl-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    @Input() private menu:Menu;
}