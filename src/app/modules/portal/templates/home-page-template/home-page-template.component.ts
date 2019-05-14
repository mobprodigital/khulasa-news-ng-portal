import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsModel } from 'src/app/model/news.model';
import { TitleService } from 'src/app/service/title/title.service';
@Component({
  selector: 'app-home-page-template',
  templateUrl: './home-page-template.component.html',
  styleUrls: ['./home-page-template.component.scss']
})
export class HomePageTemplateComponent implements OnInit {
  @Input() title: string;
  @Input() count: number;
  @Input() categoryId: number;
  @Input() cssClass: string;

  public defaultImg: string = "assets/images/news/default.jpg";
  public newsList: NewsModel[] = [];
  public loader: boolean = true;
  public errorMsg: string = "";
  public Arr = Array(6);

  constructor(private newsService: NewsService, private titleService: TitleService) {
    this.titleService.setTitle('Breaking News, Latest News, Bollywood, Business, Politics, Sports & Entertainment News');
  }

  private getNewsByCategoryId() {
    this.newsService.getNews(this.categoryId, this.count)
      .then(newsdata => { this.newsList = newsdata; this.loader = false; })
      .catch(err => { this.errorMsg = err; this.loader = false; });
      window.scroll({
        top: 0,
      });
  }
  ngOnInit() {
    this.getNewsByCategoryId();
    if(this.count){
      this.Arr.length = this.count;
    }
  }

}
