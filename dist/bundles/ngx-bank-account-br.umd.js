(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-bank-account-br', ['exports', '@angular/common', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ngx-bank-account-br'] = {}),global.ng.common,global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,common,core,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSafePipe = /** @class */ (function () {
        function NgxSafePipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @param {?} type
         * @return {?}
         */
        NgxSafePipe.prototype.transform = /**
         * @param {?} value
         * @param {?} type
         * @return {?}
         */
            function (value, type) {
                switch (type) {
                    case 'html':
                        return this.sanitized.bypassSecurityTrustHtml(value);
                    case 'resource':
                        return this.sanitized.bypassSecurityTrustResourceUrl(value);
                    case 'style':
                        return this.sanitized.bypassSecurityTrustStyle(value);
                }
            };
        NgxSafePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'safe'
                    },] }
        ];
        /** @nocollapse */
        NgxSafePipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return NgxSafePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSafePipeModule = /** @class */ (function () {
        function NgxSafePipeModule() {
        }
        NgxSafePipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NgxSafePipe],
                        exports: [NgxSafePipe]
                    },] }
        ];
        return NgxSafePipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxSafePipeModule = NgxSafePipeModule;
    exports.ɵa = NgxSafePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bank-account-br.umd.js.map