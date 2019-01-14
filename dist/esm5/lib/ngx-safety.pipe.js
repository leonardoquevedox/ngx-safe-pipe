/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Angular safety pipe.
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    /** @nocollapse */
    NgxSafetyPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return NgxSafetyPipe;
}());
export { NgxSafetyPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxSafetyPipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNhZmV0eS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNhZmV0eS1waXBlLyIsInNvdXJjZXMiOlsibGliL25neC1zYWZldHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFeEQ7SUFJSSx1QkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7Ozs7OztJQUVoRCxpQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQUssRUFBRSxJQUFJO1FBQ2pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4RCxLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9ELEtBQUssT0FBTztnQkFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUQ7SUFDTCxDQUFDOztnQkFmSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7Ozs7Z0JBSlEsWUFBWTs7SUFrQnJCLG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxhQUFhOzs7Ozs7SUFDVixrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIEFuZ3VsYXIgc2FmZXR5IHBpcGUuXG4gKi9cblxuXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnc2FmZSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4U2FmZXR5UGlwZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZWQ6IERvbVNhbml0aXplcikgeyB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWUsIHR5cGUpOiBhbnkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSlcbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlKVxuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59Il19