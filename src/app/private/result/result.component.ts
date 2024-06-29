import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  affichage : boolean = true;

  public changerAffichage(){
    this.affichage = !this.affichage;
  }
}
