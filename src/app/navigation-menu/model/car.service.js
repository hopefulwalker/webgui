"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/data/cars-small.json')
            .toPromise()
            .then(function (res) {
            var datas = res.json().data;
            console.log(datas);
            return datas;
        });
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map