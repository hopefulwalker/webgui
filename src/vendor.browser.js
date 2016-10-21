"use strict";
// Angular 2
require('@angular/platform-browser');
require('@angular/platform-browser-dynamic');
require('@angular/core');
require('@angular/common');
require('@angular/forms');
require('@angular/http');
require('@angular/router');
//
// // RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
if ('production' === process.env.ENV) {
}
else {
}
// JS
require('jquery'); // Better to use ProvidePlugin.
require('tether');
require('bootstrap');
// import 'metismenu';
// // CSS May put these in index.html, and copy realted files under assets directory and enable the copy webpack plugin.
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.css');
// import '../node_modules/metismenu/dist/metisMenu.css';
// primeng & themes & font-awesome are required by primeng.
require('../node_modules/primeng/resources/themes/bootstrap/theme.css');
require('../node_modules/primeng/resources/primeng.css');
//# sourceMappingURL=vendor.browser.js.map