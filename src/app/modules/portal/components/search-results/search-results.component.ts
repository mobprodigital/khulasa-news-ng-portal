import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchTerm: string = '';
  public newsList: NewsModel[] = [];
  public errorMsg: string = '';
  public loader: boolean = true;
  public defaultImg: string = "assets/images/news/default.jpg";
  public Arr: Array<number> = Array(10);
  public count: number = 10;
  public hasMoreNews: boolean = true;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getSearchTerm();
      }
    })
  }

  public getSearchTerm() {
    const searchTerm = this.activatedRoute.snapshot.paramMap.get('searchTerm');
    if (searchTerm) {
      this.searchTerm = searchTerm;
      this.newsList = [];
      this.searchPosts();
    }
  }

  private searchPosts(count: number = 10, from: number = 1) {
    this.errorMsg = '';
    this.loader = true;
    this.newsService.getSearchResults(this.searchTerm, count, from)
      .then(searchResults => {
        if (searchResults && searchResults.length > 0) {
          this.newsList.push(...searchResults);
        } else {
          this.hasMoreNews = false;
        }
      })
      .catch(err => {
        this.errorMsg = err;
      })
      .finally(() => {
        this.loader = false;
      });
  }

  public moreNews() {

    this.searchPosts(this.count, (this.newsList.length + 1));
    /* 
        this.loader = true;
        this.errorMsg = '';
        this.newsService.getSearchResults(this.searchId, this.count, (this.newsList.length + 1))
          .then(newsdata => {
            this.newsList.push(...newsdata);
            this.loader = false;
          })
          .catch(err => {
            this.errorMsg = err;
            this.loader = false;
          }); */
  }

  ngOnInit() {

  }

}
