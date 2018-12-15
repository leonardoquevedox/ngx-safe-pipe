/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxFromNowPipe } from './ngx-from-now.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxFromNowPipe],
    exports: [NgxFromNowPipe]
})
export class NgxFromNowPipeModule { }