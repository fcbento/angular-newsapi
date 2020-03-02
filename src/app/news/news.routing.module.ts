import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent, canActivate: [AuthGuardService],
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