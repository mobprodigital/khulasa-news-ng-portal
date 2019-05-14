import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-news-archive',
  templateUrl: './news-archive.component.html',
  styleUrls: ['./news-archive.component.css']
})
export class NewsArchiveComponent implements OnInit, OnDestroy {

  public newsCategoryId: number;
  private routeSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.routeSubscription = this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getNewsCategoryId();
      }
    })
  }
  private getNewsCategoryId() {
    let catId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (catId != undefined && catId != null) {
      this.newsCategoryId = catId;
    }
  }
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
