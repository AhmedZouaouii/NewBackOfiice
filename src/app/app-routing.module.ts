import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AjouterNouveauArticleComponent } from './ajouter-nouveau-article/ajouter-nouveau-article.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content/content.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListeDesArticlesComponent } from './liste-des-articles/liste-des-articles.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TestsComponent } from './tests/tests.component';


const routes: Routes = [
 { path: 'element', component: ContentComponent},
 { path: 'article', component: AjouterNouveauArticleComponent},
 {path:'update/:id', component: AjouterNouveauArticleComponent},
 { path: 'categorie', component: CategoriesComponent},
 { path: 'tests', component: TestsComponent},
 { path: 'listeArticles', component: ListeDesArticlesComponent},
 { path: 'statistics', component: StatisticsComponent},
 { path: 'detail', component: DetailArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
