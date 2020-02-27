import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category.model'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public category: Category = new Category();

  constructor() {
  }

  ngOnInit(): void {
  }

}
