import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsCategoryComponent } from './news-category/news-category.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent,
    children: [
      { path: '', component: NewsCategoryComponent },
      { path: 'category', component: NewsCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }