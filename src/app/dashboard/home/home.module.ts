import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from "@angular/common";
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule,DropdownModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule {
}
