import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news.routing.module';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NewsRoutingModule,
    DirectiveModule
    ]
})
export class NewsModule { }
