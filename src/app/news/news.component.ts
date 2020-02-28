import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Category } from '../models/category.model'
import { Country } from '../models/countries.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public category: Category = new Category();
  public country: Country = new Country();
  public showCountries: boolean = false;

  @ViewChild('sideBar') sideBar: ElementRef;
  
  constructor(private service: NewsService) { }

  ngOnInit() {

  }

  public openSideBar(): void {
    window.innerWidth == 360
      ? this.sideBar.nativeElement.style.width = "150px"
      : this.sideBar.nativeElement.style.width = "180px"
  }

  public listCountries(): boolean {
    return this.showCountries = true;
  }

  public unlistCountries(): boolean {
    return this.showCountries = false;
  }

  public onClose(): void {
    this.sideBar.nativeElement.style.width = "0";
    this.showCountries = false
  }

  public getNews(category: string): void{
    this.service.getCategoryNews(category).subscribe(news => {
      console.log(news)
    })
    this.onClose();
  }

  public getNewsByCountry(country: any) {
    this.service.getNewsByCountry(country).subscribe(news => {
      console.log(news)
    })
    this.onClose();
  }

}
