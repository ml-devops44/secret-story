import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { PropositionComponent } from './proposition.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"

@NgModule({
  declarations: [PropositionComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    FloatLabelModule,
  ], 
  providers:[UserService]
})
export class PropositionModule { }
