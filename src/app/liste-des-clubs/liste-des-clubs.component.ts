import { Component, OnInit } from '@angular/core';
import { Club } from '../models/Club';
import { ClubServiceService } from '../services/club-service.service';
@Component({
  selector: 'app-liste-des-clubs',
  templateUrl: './liste-des-clubs.component.html',
  styleUrls: ['./liste-des-clubs.component.css']
})
export class ListeDesClubsComponent implements OnInit {
  public club: Club[];
  
  constructor(private clubService:ClubServiceService) { }

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe(
      (data:Club[])=>{this.club=data}
   );
  }
  deleteClub(id : number){
   
    
    this.clubService.deleteClub(id).subscribe(
      ()=> this.club.splice(id,1)
    )

  
}

}
