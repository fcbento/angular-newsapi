import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowDirective } from './row.directive';
import { GridDirective } from './grid.directive';

@NgModule({
  declarations: [RowDirective, GridDirective],
  imports: [
    CommonModule
  ],
  exports: [RowDirective, GridDirective]
})
export class DirectiveModule { }
