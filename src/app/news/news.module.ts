import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news.routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { NewsCategoryComponent } from './news-category/news-category.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NewsRoutingModule,
    DirectiveModule
  ]
})
export class NewsModule { }
