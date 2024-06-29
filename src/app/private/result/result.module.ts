import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ScoreComponent } from './score/score.component';
import { ReponsesComponent } from './reponses/reponses.component';



@NgModule({
  declarations: [ResultComponent, ScoreComponent,ReponsesComponent],
  imports: [
    CommonModule,
  ]
})
export class ResultModule { }
