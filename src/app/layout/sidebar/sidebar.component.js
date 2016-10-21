"use strict";
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var Observable_1 = require("rxjs/Observable");
var menu_service_1 = require("./model/menu.service");
var SidebarComponent = (function () {
    function SidebarComponent(service) {
        this.service = service;
        this.isActive = false;
        this.showMenu = '';
        this.toggled = false;
        this.searchSubject = new Subject_1.Subject();
        this.service = service;
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.folder = this.service.getSynMenuFolder();
        this.folderSubscriber = this.searchSubject.asObservable()
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (target) { return _this.service.getMenuFolder(target); })
            .catch(function (error) {
            // todo: console.log(error);
            return Observable_1.Observable.of(null);
        })
            .subscribe(function (folder) { return _this.folder = folder; });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
        this.folderSubscriber.unsubscribe();
    };
    SidebarComponent.prototype.search = function () {
        this.searchSubject.next(this.target);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'ftl-sidebar-cmp',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map