import {Component} from '@angular/core';
@Component({
    selector: 'ftl-clock',
    template: `<i class="fa fa-clock-o fa-lg"></i> {{now |date:'HH:mm:ss'}}`
})
export class ClockComponent {
    now = new Date();

    constructor() {
        setInterval(()=>this.now = new Date(), 1000);
    }
}