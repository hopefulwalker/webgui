import {Car} from "./model/car";
import {CarService} from "./model/car.service";
import {OnInit, Component} from "@angular/core";

@Component({    
    templateUrl: './navigation-menu.component.html'
})

export class NavigationMenuComponent implements OnInit {

    cars:Car[];

    cols:any[];

    constructor(private carService:CarService) {
    }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
}