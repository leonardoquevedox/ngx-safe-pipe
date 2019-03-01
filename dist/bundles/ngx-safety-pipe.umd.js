(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-safety-pipe', ['exports', '@angular/platform-browser', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-safety-pipe'] = {}),global.ng.platformBrowser,global.ng.core,global.ng.common));
}(this, (function (exports,platformBrowser,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSafetyPipe = /** @class */ (function () {
        function NgxSafetyPipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @param {?} type
         * @return {?}
         */
        NgxSafetyPipe.prototype.transform = /**
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
        NgxSafetyPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'safe'
                    },] }
        ];
        NgxSafetyPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return NgxSafetyPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSafetyPipeModule = /** @class */ (function () {
        function NgxSafetyPipeModule() {
        }
        NgxSafetyPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NgxSafetyPipe],
                        exports: [NgxSafetyPipe]
                    },] }
        ];
        return NgxSafetyPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxSafetyPipe = NgxSafetyPipe;
    exports.NgxSafetyPipeModule = NgxSafetyPipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-safety-pipe.umd.js.map