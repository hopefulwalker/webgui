import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, RequestOptionsArgs, Response} from "@angular/http";

@Injectable()
export class RestService {
    constructor(private http:Http) {
    }

    getRestBody(url:string, options:RequestOptionsArgs):Observable<string> {
        return this.http.request(url, options)
            .map(res=>res.text())
            .catch(this.handleError);
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}