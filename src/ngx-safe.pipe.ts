/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Angular safety pipe.
 */


import { Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'safe'
})
export class NgxSafePipe {
    constructor(private sanitized: DomSanitizer) { }

    transform(value, type): any {
        switch (type) {
            case 'html':
                return this.sanitized.bypassSecurityTrustHtml(value)
            case 'resource':
                return this.sanitized.bypassSecurityTrustResourceUrl(value)
            case 'style':
                return this.sanitized.bypassSecurityTrustStyle(value)
        }
    }
}