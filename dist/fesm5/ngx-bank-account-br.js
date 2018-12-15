import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
        { type: Pipe, args: [{
                    name: 'safe'
                },] }
    ];
    /** @nocollapse */
    NgxSafePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { NgxSafePipeModule, NgxSafePipe as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map