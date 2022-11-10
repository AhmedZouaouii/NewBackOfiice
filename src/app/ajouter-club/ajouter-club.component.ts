import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Club } from '../models/Club';
import { ClubServiceService } from '../services/club-service.service';
@Component({
  selector: 'app-ajouter-club',
  templateUrl: './ajouter-club.component.html',
  styleUrls: ['./ajouter-club.component.css']
})
export class AjouterClubComponent implements OnInit {
club :Club;
alert : boolean= false;

dateSelected:Date ;
dt:Date;
title:string;
  constructor(private clubService :ClubServiceService ,
    private currentRoute:ActivatedRoute,routes:Router) { }

  ngOnInit(): void {
    
    let idClub= this.currentRoute.snapshot.params['idClub'];
   
    if(idClub==null){
      //add a new Product
      this.club=new Club();
    this.title='Ajouter un article scientifique'}
    else{
      //update
      this.title='Modifier article : '+idClub;
      this.clubService.getClubById(idClub).subscribe(
        (data)=>this.club=data
        )};

  }

  save():void{
    
    this.clubService.addClub(this.club).subscribe();
    this.alert=true;
  }


}
