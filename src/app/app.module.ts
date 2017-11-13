import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatSortModule} from '@angular/material';
import { MyDatePickerModule } from 'mydatepicker';
import { JsonApiModule } from 'angular2-jsonapi';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { AddCategorieComponent } from './page/categories/categorieAdd/categorieAdd.component';
import { SocietiesComponent } from './page/societies/societies.component';
import { VDIComponent } from './page/vdi/vdi.component';
import { LoungeComponent } from './page/lounge/lounge.component';
import { RecommendationComponent } from './page/recommendation/recommendation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    AddCategorieComponent,
    SocietiesComponent,
    VDIComponent,
    LoungeComponent,
    RecommendationComponent
  ],
  entryComponents: [
    CategoriesComponent,
    AddCategorieComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSortModule,
    MyDatePickerModule,
    JsonApiModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
