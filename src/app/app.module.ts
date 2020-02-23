import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDirective } from './directives/grid.directive';
import { RowDirective } from './directives/row.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridDirective,
    RowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
