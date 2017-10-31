import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { SocietiesComponent } from './page/societies/societies.component';
import { VDIComponent } from './page/vdi/vdi.component';
import { LoungeComponent } from './page/lounge/lounge.component';
import { RecommendationComponent } from './page/recommendation/recommendation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    SocietiesComponent,
    VDIComponent,
    LoungeComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
