/*
 * Based on
 * https://gist.github.com/brandonroberts/02cc07face25886fe142c4dbd8da1340
 */
"use strict";
var core_1 = require('@angular/core');
var LoaderCallback = (function () {
    function LoaderCallback(callback, exportName) {
        if (exportName === void 0) { exportName = "default"; }
        this.callback = callback;
        this.exportName = exportName;
    }
    return LoaderCallback;
}());
function load(callback, exportName) {
    return new LoaderCallback(callback, exportName);
}
exports.load = load;
/**
 * NgModuleFactoryLoader that uses Promise to load NgModule type and then compiles them.
 * @experimental
 */
var AsyncNgModuleLoader = (function () {
    function AsyncNgModuleLoader(compiler) {
        this.compiler = compiler;
    }
    AsyncNgModuleLoader.prototype.load = function (modulePath) {
        var _this = this;
        if (modulePath instanceof LoaderCallback) {
            var loaderCallback_1 = modulePath;
            return loaderCallback_1.callback(loaderCallback_1.exportName)
                .then(function (type) { return checkNotEmpty(type, loaderCallback_1.exportName); })
                .then(function (type) { return _this.compiler.compileModuleAsync(type); });
        }
        return Promise.resolve(null);
    };
    AsyncNgModuleLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Compiler])
    ], AsyncNgModuleLoader);
    return AsyncNgModuleLoader;
}());
exports.AsyncNgModuleLoader = AsyncNgModuleLoader;
function checkNotEmpty(value, exportName) {
    if (!value) {
        throw new Error("Cannot find export \"" + exportName + "\" in module");
    }
    return value;
}
//# sourceMappingURL=async-ng-module-loader.js.map