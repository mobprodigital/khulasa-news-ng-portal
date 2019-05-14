import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { HomeComponent } from './components/home/home.component';
import { NewsArchiveComponent } from './components/news-archive/news-archive.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':slug',
        component: SingleNewsComponent
      },
      {
        path: 'category/:id',
        component: NewsArchiveComponent
      },

      {
        path: 'page/:slug',
        component: SinglePageComponent
      }
      ,
      {
        path: 'search/:searchTerm',
        component: SearchResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
