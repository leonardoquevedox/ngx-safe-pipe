import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: Pipe, args: [{
                    name: 'safe'
                },] }
    ];
    NgxSafetyPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { NgxSafetyPipe, NgxSafetyPipeModule };

//# sourceMappingURL=ngx-safety-pipe.js.map