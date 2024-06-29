import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SignonComponent } from './signon.component';

@NgModule({
  declarations: [SignonComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule
  ]
})
export class SignonModule { }
