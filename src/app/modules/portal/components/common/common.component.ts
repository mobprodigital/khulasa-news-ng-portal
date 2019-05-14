import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']

})
export class CommonComponent implements OnInit {
  public slider: boolean = true;
  public baseurl = "";
  public lang = '';
  constructor(public actRoute: ActivatedRoute, public router: Router) {
    this.geturl();
  }

  geturl() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        let currentPath = ev.url;
        if (currentPath === '/') {
          this.slider = true;
        }
        else {
          this.slider = false;
        }

      }
    })
  }

  public baseUrl(btnValue) {
    if (localStorage.getItem('lang') === btnValue) {
      return;
    }
    else {
      localStorage.setItem('lang', btnValue);
      this.router.navigateByUrl('')
      location.reload();
    }
  }


  ngOnInit() {
    if(localStorage.getItem('lang')=='hin')
    {
      this.lang='eng';
    }
    else
    {
      this.lang='hin';

    }
  }
}
