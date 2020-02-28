import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {

  @Input() news: any = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.news = this.service.getNews();
  }

}
