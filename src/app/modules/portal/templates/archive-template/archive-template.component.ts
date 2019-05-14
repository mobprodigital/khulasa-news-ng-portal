import { Component, OnInit, Input } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/service/news/news.service';
import { NewsCategoryModel } from 'src/app/model/news-category.model';

@Component({
  selector: 'app-archive-template',
  templateUrl: './archive-template.component.html',
  styleUrls: ['./archive-template.component.css']
})
export class ArchiveTemplateComponent implements OnInit {


  @Input() newsCatId: number;

  public news: NewsModel[] = [];
  public count: number = 10;
  public defaultImg: string = "assets/images/news/default.jpg";
  public loader: boolean = true;
  public errorMsg: string = "";
  public Arr: Array<number> = Array(10);
  public categoryName: string = "";

  constructor(private newsService: NewsService) { }

  private async getNewsData() {
    const newsData = await Promise.all(
      [this.getCategoryById(), this.getNewsByCategory()].map(p => p.catch(err => undefined))
    );
    this.categoryName = newsData[0].name || 'News';
    this.news = newsData[1] ? newsData[1] : [];
    this.loader = false;
    window.scroll({
      top: 0,
    });
  }

  private getNewsByCategory(): Promise<NewsModel[]> {
    return this.newsService.getNews(this.newsCatId);
  }

  private getCategoryById(): Promise<NewsCategoryModel> {
    return this.newsService.getNewsCategories(this.newsCatId);
  }

  public moreNews() {
    this.loader = true;
    this.errorMsg = '';
    this.newsService.getNews(this.newsCatId, this.count, (this.news.length + 1))
      .then(newsdata => { this.news.push(...newsdata); this.loader = false; })
      .catch(err => { this.errorMsg = err; this.loader = false; });
  }

  ngOnChanges() {
    this.loader = true;
    this.getNewsData();
    this.Arr.length = this.count;
  }

  ngOnInit() {

  }
}
