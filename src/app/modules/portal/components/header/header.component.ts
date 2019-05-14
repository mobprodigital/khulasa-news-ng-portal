import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsCategoryModel } from 'src/app/model/news-category.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date = new Date();
  public categoryList: NewsCategoryModel[] = [];
  public SearchTerm: string = '';
  public lang=localStorage.getItem('lang');

  constructor(private newsService: NewsService, private router: Router) {
    this.getCategory();

  }

  private getCategory() {
    this.newsService.getMenuCategories().then(cats => {
      let c = cats;
      this.categoryList = cats;
    });
  }


  check() {
    if (this.SearchTerm && this.SearchTerm.trim()) {
      this.router.navigate(['search', this.SearchTerm]);
    }
  }

  ngOnInit() {

  }


}
