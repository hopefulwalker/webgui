import {Component} from "@angular/core";
import {MenuFolder} from "./model/menu-folder";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {MenuService} from "./model/menu.service";

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

    private folder:MenuFolder;
    private target:string;
    private searchSubject = new Subject<string>();
    private folderSubscriber:Subscription;

    constructor(private service:MenuService) {
        this.service = service;
    }

    ngOnInit() {
        this.folder = this.service.getSynMenuFolder();
        this.folderSubscriber = this.searchSubject.asObservable()
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(target=> this.service.getMenuFolder(target))
            .catch(error=> {
                // todo: console.log(error);
                return Observable.of(null);
            })
            .subscribe(folder=>this.folder = folder);
    }

    ngOnDestroy() {
        console.log('destroy');
        this.folderSubscriber.unsubscribe();
    }

    search() {
        this.searchSubject.next(this.target);
    }
}
