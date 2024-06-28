import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';
import { PropositionService } from 'src/app/services/proposition.service';
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

interface proposition{
  idProposition : number| undefined; 
  idInterne : number;
  user_secret : User; 
  user_selected : User|undefined;
  user_connected : User;
}



@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrl: './proposition.component.css'
})
export class PropositionComponent implements OnInit {
  propositions : proposition[] = [];
  connectedUser !: User; 
  allUsers !: User[];
  users !: User[];
  propositionsOfUser : proposition[] = [];

  constructor(
    private userService : UserService, 
    private authService : AuthenticationService, 
    private propService : PropositionService
  ){}

  async ngOnInit() {
    this.allUsers= await this.userService.getAllUsers();
    const usernameConnected = await this.authService.getUsernameOfConnectedUser();
    
    const userConnected = this.allUsers.find(user => user.username == usernameConnected);
    this.users = this.allUsers.filter(user => user.username != usernameConnected);
    
    
    
    let i = 0; 

    if(userConnected){
      const propositionsActuelle = await this.propService.getPropositionUser(userConnected.id);


      this.connectedUser = userConnected; 
      this.users.forEach(user=>{
        if(user.username != this.connectedUser.username && user.id != 0){

          console.log(propositionsActuelle);
          
          const maProp : { id: number,idUser_proposition:number }= propositionsActuelle.find((prop: { idUser_secret: any; }) => prop.idUser_secret == user.id);
          if(maProp){
          const userSelect = this.users.find((user)=> user.id == maProp.idUser_proposition)
      
          if(userSelect){
            const proposition : proposition = {
              idProposition : maProp ? maProp.id : undefined,
              idInterne : i,
              user_secret : user, 
              user_selected :userSelect,
              user_connected : this.connectedUser
            }
            this.propositions.push(proposition);
          }else{
            const proposition : proposition = {
              idProposition : maProp ? maProp.id : undefined,
              idInterne : i,
              user_secret : user, 
              user_selected : undefined,
              user_connected : this.connectedUser
            }
            this.propositions.push(proposition);
          }
        }else{
          const proposition : proposition = {
            idProposition : undefined,
            idInterne : i,
            user_secret : user, 
            user_selected : undefined,
            user_connected : this.connectedUser
          }
          this.propositions.push(proposition);
        }
          
          i ++; 
        }

      })
    }

  }

  public saveProposition(proposition : proposition){
    
      if(proposition.idProposition != undefined){
        this.saveApiProposition(proposition);
      }else{if(proposition.user_selected){
        this.addApiProposition(proposition);
      }
    }

  }

  private saveApiProposition(proposition : proposition){
    console.log("save");
    this.propService.updateProposition(proposition);
  }
  private addApiProposition(proposition : proposition){
    console.log("add"); 
    this.propService.addProposition(proposition);
  }
}
