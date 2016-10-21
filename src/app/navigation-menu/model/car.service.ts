import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Car} from "./car";

@Injectable()
export class CarService {

    constructor(private http:Http) {
    }

    getCarsSmall() {
        return this.http.get('assets/data/cars-small.json')
            .toPromise()
            .then(res => {
                let datas = <Car[]> res.json().data;
                console.log(datas);
                return datas;
            });
    }
}