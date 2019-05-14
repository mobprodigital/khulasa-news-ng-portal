import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-letest-news-template',
  templateUrl: './letest-news-template.component.html',
  styleUrls: ['./letest-news-template.component.scss']
})
export class LetestNewsTemplateComponent implements OnInit {
  @Input() categoryId: number;
  @Input() count: number;
  @Input() categoryTitle: string;
  @Input() cssClass: string;
  public newsList: NewsModel[] = [];
  public errorMsg: string = "";
  public loader: boolean = true;
  constructor(private newsService: NewsService, private router: Router) {

  }
  private getNewsByCategoryId() {
    if (this.categoryId) {
      this.loader = true;
      this.errorMsg = '';
      this.newsList = [];
      this.newsService.getNews(this.categoryId, this.count)
        .then(data => { this.newsList = data; this.loader = false })
        .catch(err => { this.errorMsg = err; this.loader = false });
    }
  }

  ngOnInit() {
    this.getNewsByCategoryId();
   /*  this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (this.categoryId == 42) {
          this.newsList = [];
          this.getNewsByCategoryId();
        }
      }
    }) */
  }
}
