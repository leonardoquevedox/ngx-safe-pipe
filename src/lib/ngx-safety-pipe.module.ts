/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxSafetyPipe } from './ngx-safety.pipe'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxSafetyPipe],
    exports: [NgxSafetyPipe]
})
export class NgxSafetyPipeModule { }