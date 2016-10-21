import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

import './assets/sass/app.scss';
// import './app/navigation/bootmetismenu.js';

platformBrowserDynamic().bootstrapModule(AppModule);