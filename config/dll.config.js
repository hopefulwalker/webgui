const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
    entry: {
        'dll': [
            // vendor.browser.ts
            /*
             * we need to expose jquery to $ and jQuery. we could not put here.
             * for metismenu & bootstrap, because they depend on jquery, so comment them too.
             */
            //'jquery', 
            //'metismenu',
            //'bootstrap',
            
            'rxjs/add/operator/map',
            'rxjs/add/operator/mergeMap',
            
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/http',
            '@angular/router',
            
            // polyfills.browser.ts
            'core-js/es6/symbol',
            'core-js/es6/object',
            'core-js/es6/function',
            'core-js/es6/parse-int',
            'core-js/es6/parse-float',
            'core-js/es6/number',
            'core-js/es6/math',
            'core-js/es6/string',
            'core-js/es6/date',
            'core-js/es6/array',
            'core-js/es6/regexp',
            'core-js/es6/map',
            'core-js/es6/set',
            'core-js/es6/weak-map',
            'core-js/es6/weak-set',
            'core-js/es6/typed',
            'core-js/es6/reflect',
            
            'core-js/es7/reflect',
            'zone.js/dist/zone',
            
            'ts-helpers',
            
            'zone.js/dist/long-stack-trace-zone'
        ]
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: helpers.root('dist', '[name]-manifest.json'),
            name: '[name]_[hash]',
            context: __dirname
        })
    ]
};