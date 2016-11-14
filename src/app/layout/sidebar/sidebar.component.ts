import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {MenuService} from "./model/menu.service";
import {Menu} from "./model/menu";

@Component({
    selector: 'ftl-sidebar-cmp',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    isActive = false;
    showMenu:string = '';

    toggled:boolean = false;

    eventCalled() {
        this.isActive = !this.isActive;
    }

    private menu:Menu;
    private target:string;
    private searchSubject = new Subject<string>();
    private folderSubscriber:Subscription;

    constructor(private service:MenuService) {
        this.service = service;
    }

    ngOnInit() {
        this.folderSubscriber = this.searchSubject.asObservable()
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(target=> this.service.getMenu('MOCK', target))
            .catch(error=> {
                // todo: console.log(error);
                return Observable.of(null);
            })
            .subscribe(menu=>this.menu = menu);
        this.searchSubject.next(null);
    }

    ngOnDestroy() {
        console.log('destroy');
        this.folderSubscriber.unsubscribe();
    }

    search() {
        this.searchSubject.next(this.target);
    }
}
