import {Component, OnInit} from "@angular/core";
import {RestRequest} from "./model/rest-request";
import {RestService} from "./model/rest.service";
import {RequestOptionsArgs, RequestOptions, BaseRequestOptions, Request} from "@angular/http";

@Component({
    templateUrl: './rest-client.component.html'
})
export class RestClientComponent implements OnInit {
    resInfo:String;
    reqInfo:RestRequest;

    constructor(private service:RestService) {
    }

    onSubmit() {
        this.service.getRestBody(this.reqInfo.url, {method: this.reqInfo.method, body: this.reqInfo.body})
            .subscribe(resInfo => this.resInfo = resInfo, error => this.resInfo = <any>error);
    }

    ngOnInit() {
        this.reqInfo = new RestRequest('http://127.0.0.1:3000', 'POST', '');
    }

    get reqObj() {
        return JSON.stringify(this.reqInfo);
    }
}