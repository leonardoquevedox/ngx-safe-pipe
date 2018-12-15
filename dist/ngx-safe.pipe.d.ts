/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Angular safety pipe.
 */
import { DomSanitizer } from '@angular/platform-browser';
export declare class NgxSafePipe {
    private sanitized;
    constructor(sanitized: DomSanitizer);
    transform(value: any, type: any): any;
}
