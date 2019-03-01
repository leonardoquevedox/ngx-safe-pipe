/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNhZmV0eS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNhZmV0eS1waXBlLyIsInNvdXJjZXMiOlsibGliL25neC1zYWZldHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFeEQ7SUFJSSx1QkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7Ozs7OztJQUVoRCxpQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQUssRUFBRSxJQUFJO1FBQ2pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4RCxLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9ELEtBQUssT0FBTztnQkFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUQ7SUFDTCxDQUFDOztnQkFmSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7OztnQkFKUSxZQUFZOztJQWtCckIsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLGFBQWE7Ozs7OztJQUNWLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQW5ndWxhciBzYWZldHkgcGlwZS5cbiAqL1xuXG5cbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdzYWZlJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hTYWZldHlQaXBlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7IH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZSwgdHlwZSk6IGFueSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKVxuICAgICAgICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpXG4gICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=