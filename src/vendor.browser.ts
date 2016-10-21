// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
//
// // RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

if ('production' === process.env.ENV) {
  // Production
} else {
  // Development
}

// JS
import 'jquery';// Better to use ProvidePlugin.
import 'tether';
import 'bootstrap';
// import 'metismenu';
// // CSS May put these in index.html, and copy realted files under assets directory and enable the copy webpack plugin.
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
// import '../node_modules/metismenu/dist/metisMenu.css';
// primeng & themes & font-awesome are required by primeng.
import '../node_modules/primeng/resources/themes/bootstrap/theme.css';
import '../node_modules/primeng/resources/primeng.css';