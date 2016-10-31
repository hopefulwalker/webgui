import {NgModule} from "@angular/core";
import {RestClientComponent} from "./rest-client.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RestService} from "./model/rest.service";

@NgModule({
    imports: [FormsModule, HttpModule],
    declarations: [RestClientComponent],
    exports: [RestClientComponent],
    providers: [RestService]
})
export class RestClientModule {
}
