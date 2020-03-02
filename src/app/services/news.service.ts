import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_BACK } from '../api/app.api'
import { API_TOKEN } from '../api/app.api'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: any[] = [];

  constructor(private http: HttpClient) { }

  public getCategoryNews(category: string) {
    return this.http.get(`${API_BACK}everything?q=${category}&apiKey=${API_TOKEN}`)
  }

  public getNewsByCountry(country: any) {
    return this.http.get(`${API_BACK}top-headlines?country=${country.short}&apiKey=${API_TOKEN}`)
  }

  public getNews(): any[] {
    return this.news['articles'] || [];
  }

  public setNews(news: any[]): void {
    this.news = news || [];
  }

}
