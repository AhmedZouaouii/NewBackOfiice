import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articleScientifique';
import { Categorie } from '../models/categorie';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-ajouter-nouveau-article',
  templateUrl: './ajouter-nouveau-article.component.html',
  styleUrls: ['./ajouter-nouveau-article.component.css']
})
export class AjouterNouveauArticleComponent implements OnInit {
article :Article;
categorie : Categorie ;
alert : boolean= false;
message :String;
categorieTable :Categorie[];
categorieSelected :String ;
dateSelected:Date ;
dt:Date;


  constructor(private articleService : ArticleServiceService) { }

  ngOnInit(): void {
    this.article=new Article();
    this.categorie=new Categorie();
    this.article.categorie=this.categorieSelected;
    this.categorieTable = [
     {id:1,titre:"Science",domaine:"Nature",description:"earth"},
     {id:2,titre:"Info",domaine:"It",description:"Computer"},
    ];
  
  }
  save():void{
    
    this.articleService.addArticle(this.article).subscribe();
    this.alert=true;
  }

  change(val : any){
    console.log(val)
    this.categorieSelected=val;

  }



}
