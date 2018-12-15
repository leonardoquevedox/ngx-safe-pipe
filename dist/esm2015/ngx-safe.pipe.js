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
export class NgxSafePipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @param {?} type
     * @return {?}
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitized.bypassSecurityTrustHtml(value);
            case 'resource':
                return this.sanitized.bypassSecurityTrustResourceUrl(value);
            case 'style':
                return this.sanitized.bypassSecurityTrustStyle(value);
        }
    }
}
NgxSafePipe.decorators = [
    { type: Pipe, args: [{
                name: 'safe'
            },] }
];
/** @nocollapse */
NgxSafePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxSafePipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNhZmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1iYW5rLWFjY291bnQtYnIvIiwic291cmNlcyI6WyJuZ3gtc2FmZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUt4RCxNQUFNLE9BQU8sV0FBVzs7OztJQUNwQixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQzs7Ozs7O0lBRWhELFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNqQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDeEQsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvRCxLQUFLLE9BQU87Z0JBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVEO0lBQ0wsQ0FBQzs7O1lBZkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxNQUFNO2FBQ2Y7Ozs7WUFKUSxZQUFZOzs7Ozs7O0lBTUwsZ0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIHNhZmV0eSBwaXBlLlxuICovXG5cblxuaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3NhZmUnXG59KVxuZXhwb3J0IGNsYXNzIE5neFNhZmVQaXBlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7IH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZSwgdHlwZSk6IGFueSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKVxuICAgICAgICAgICAgY2FzZSAncmVzb3VyY2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodmFsdWUpXG4gICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=