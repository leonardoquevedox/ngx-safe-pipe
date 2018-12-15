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
export { NgxSafePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxSafePipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNhZmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1iYW5rLWFjY291bnQtYnIvIiwic291cmNlcyI6WyJuZ3gtc2FmZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV4RDtJQUlJLHFCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQzs7Ozs7O0lBRWhELCtCQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFDakIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELEtBQUssVUFBVTtnQkFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0QsS0FBSyxPQUFPO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1RDtJQUNMLENBQUM7O2dCQWZKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsTUFBTTtpQkFDZjs7OztnQkFKUSxZQUFZOztJQWtCckIsa0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLFdBQVc7Ozs7OztJQUNSLGdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQW5ndWxhciBzYWZldHkgcGlwZS5cbiAqL1xuXG5cbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdzYWZlJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hTYWZlUGlwZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZWQ6IERvbVNhbml0aXplcikgeyB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWUsIHR5cGUpOiBhbnkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSlcbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlKVxuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59Il19