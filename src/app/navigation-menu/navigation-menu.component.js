"use strict";
var car_service_1 = require("./model/car.service");
var core_1 = require("@angular/core");
var NavigationMenuComponent = (function () {
    function NavigationMenuComponent(carService) {
        this.carService = carService;
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    NavigationMenuComponent = __decorate([
        core_1.Component({
            templateUrl: './navigation-menu.component.html'
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());
exports.NavigationMenuComponent = NavigationMenuComponent;
//# sourceMappingURL=navigation-menu.component.js.map