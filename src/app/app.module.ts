import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { HousingItemComponent } from './components/housing-item/housing-item.component';
import { HousingsComponent } from './components/housings/housings.component';
import { HousingService } from './services/housing/housing.services';
import { MapComponent } from './components/map/map.component';
import { PlaylistComponent } from './components/video/video.component';

@NgModule({
  imports:      [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainSearchComponent,
    PageNotFoundComponent,
    HousingItemComponent,
    HousingsComponent,
    MapComponent,
    PlaylistComponent
  ],
  providers: [
    HousingService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
