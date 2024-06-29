import { Component, OnInit } from '@angular/core';
import { PropositionService } from 'src/app/services/proposition.service';

interface user{
  id :number,
  nom:string,
  password:string
  prenom:string,
  salt:string,
  secret:string,
  username:string
}

interface Score{
  user: user, 
  score:number
}


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {

  scores : Score[] = []; 

  constructor(
    private propService : PropositionService
  ){}

  async ngOnInit(){
    this.scores = await this.propService.getScore();
    console.log(this.scores);
  }
}
