import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClient } from '@angular/common/http';

import { ArticleServiceService } from './services/article-service.service';
import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { TestsComponent } from './tests/tests.component';
import { ListeDesArticlesComponent } from './liste-des-articles/liste-des-articles.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { StatisticsComponent } from './statistics/statistics.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    ContentComponent,
    AjouterNouveauArticleComponent,
    CategoriesComponent,
    TestsComponent,
    ListeDesArticlesComponent,
    DetailArticleComponent,
    StatisticsComponent

    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
