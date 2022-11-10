import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/Livre';
import { LivreService } from "../services/livreService";


@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css']
})
export class AjouterLivreComponent implements OnInit {
  livre : Livre;
  alert : boolean= false;
  livreService:LivreService;

 

  constructor() { }

  ngOnInit(): void {
    this.livre=new Livre();
         
  }
  savelivre(): void{
    
    this.livreService.addLivre(this.livre).subscribe();
    this.alert=true;
  }



}
