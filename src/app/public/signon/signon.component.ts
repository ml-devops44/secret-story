import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { newUserInterface } from 'src/app/common/interfaces/newUser.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrl: './signon.component.css'
})
export class SignonComponent {

  public username: string ="";
  public password: string="";
  public prenom: string="";
  public nom: string="";
  public secret: string="";

  constructor(
    private userService : UserService, 
    private router : Router
  ){}

  public signOn(){
    const newUser : newUserInterface ={
      username: this.username,
      password: this.password,
      prenom: this.prenom,
      nom: this.nom,
      secret: this.secret
    }
    this.userService.addUser(newUser);
    this.router.navigate(['/public/login']);
  }

  public retour(){
    this.router.navigate(['/public']);
  }
}
