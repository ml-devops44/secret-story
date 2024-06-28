import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

interface User{
  id: number;
  nom: string;
  prenom: string;
  username : string; 
  password : string; 
  salt : string; 
  secret : string; 
}

interface Secret{
  idSecret: number;
  id : number
  nom: string;
  prenom: string;
  username : string; 
  password : string; 
  salt : string; 
  secret : string; 
}



@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrl: './proposition.component.css'
})
export class PropositionComponent implements OnInit {
  users : User[] = []
  secrets : Secret[] = []

  selectedUsers : (User|undefined)[] = [] 
  freeUser : User[] = [];
  
  constructor(
    private userService : UserService
  ){}

  async ngOnInit() {
    this.users = await this.userService.getAllUsers();

    let i = 0; 

    this.users.forEach(user=>{
      const secret: Secret = {
        idSecret: i,
        id : user.id,
        nom: user.nom,
        prenom: user.prenom,
        username : user.username,
        password : user.password,
        salt : user.salt,
        secret : user.secret, 
      }
      this.secrets.push(secret);
      

      const newUser: User = {
        id : user.id,
        nom: user.nom,
        prenom: user.prenom,
        username : user.username,
        password : user.password,
        salt : user.salt,
        secret : user.secret, 
      }
      this.freeUser.push(newUser);



      this.selectedUsers.push(undefined);
      i ++; 
    })
  }

  updateFreeUsers() {
    this.freeUser = this.users.filter(user => {
      // Vérifier si l'utilisateur courant n'est pas déjà sélectionné dans selectedUsers
      return !this.selectedUsers.some(selectedUser => selectedUser?.id === user.id);
    });
  }
}
