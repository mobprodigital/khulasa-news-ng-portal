import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonComponent } from './components/common/common.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdComponent } from './components/ad/ad.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { NewsArchiveComponent } from './components/news-archive/news-archive.component';
import { HomePageTemplateComponent } from './templates/home-page-template/home-page-template.component';
import { ArchiveTemplateComponent } from './templates/archive-template/archive-template.component';
import { SliderTemplateComponent } from './templates/slider-template/slider-template.component';
import { LetestNewsTemplateComponent } from './templates/letest-news-template/letest-news-template.component';
import { LoaderComponent } from './templates/loader/loader.component';
import { ArchiveLoaderComponent } from './templates/archive-loader/archive-loader.component';
import { StockMarketComponent } from './templates/stock-market/stock-market.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    CommonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdComponent,
    RightSideBarComponent,
    SingleNewsComponent,
    NewsArchiveComponent,
    HomePageTemplateComponent,
    ArchiveTemplateComponent,
    SliderTemplateComponent,
    LetestNewsTemplateComponent,
    LoaderComponent,
    ArchiveLoaderComponent,
    StockMarketComponent,
    
    SinglePageComponent,
    
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortalModule { }
