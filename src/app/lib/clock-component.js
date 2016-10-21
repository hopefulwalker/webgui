"use strict";
var core_1 = require('@angular/core');
var ClockComponent = (function () {
    function ClockComponent() {
        var _this = this;
        this.now = new Date();
        setInterval(function () { return _this.now = new Date(); }, 1000);
    }
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'ftl-clock',
            template: "<i class=\"fa fa-clock-o fa-lg\"></i> {{now |date:'HH:mm:ss'}}"
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock-component.js.map