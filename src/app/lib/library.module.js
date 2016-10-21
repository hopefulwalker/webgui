"use strict";
var core_1 = require('@angular/core');
var clock_component_1 = require("./clock-component");
var common_1 = require("@angular/common");
var LibraryModule = (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [clock_component_1.ClockComponent],
            exports: [clock_component_1.ClockComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LibraryModule);
    return LibraryModule;
}());
exports.LibraryModule = LibraryModule;
//# sourceMappingURL=library.module.js.map