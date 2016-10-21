"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var RestMenuService = (function () {
    function RestMenuService() {
    }
    RestMenuService.prototype.getSynMenuFolder = function () {
        return null;
    };
    RestMenuService.prototype.getMenuFolder = function (target) {
        return Rx_1.Observable.of(null);
    };
    RestMenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RestMenuService);
    return RestMenuService;
}());
exports.RestMenuService = RestMenuService;
//# sourceMappingURL=rest-menu.service.js.map