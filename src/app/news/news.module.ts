import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news.routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NewsRoutingModule,
    DirectiveModule,
    NgbModule,
  ]
})
export class NewsModule { }
