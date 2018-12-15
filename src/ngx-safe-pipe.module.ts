/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxSafePipe } from './ngx-safe.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxSafePipe],
    exports: [NgxSafePipe]
})
export class NgxSafePipeModule { }