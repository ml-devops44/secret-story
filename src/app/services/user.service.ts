import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls_apis } from 'src/environments/api.env';
import { newUserInterface } from '../common/interfaces/newUser.interface';
import { updateUserInterface } from '../common/interfaces/updateUser.interface';

export interface User {
  id              : number | undefined;
  lastname        : string;
  firstname       : string;
  username        : string;
  password        : string | undefined;
  email           : string | undefined;
  role            : Role;
  last_connexion  : Date | undefined,
  type            : Type;
  state           : State;
}

export interface Role {  // Role d'un utilisateur
  name    : string;   // Administrateur; Utilisateur, Application
  value   : string;   // admin; user; app
}

export interface Type {  // Type d'un utilisateur
  name    : string;   // Operis; Client
  value   : string;  // True = Operis || False == Client
}

export interface State {  // Etat du compte d'un utilisateur
  name    : string;   // actif; inactif
  value   : boolean;  // true = actif || false = incatif
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http  : HttpClient
    ) {}


  async getAllUsers():Promise<any> {
    try {
      const response : any = await this.http.get(urls_apis.API_All_USERS).toPromise();
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async addUser(newUser : newUserInterface  ): Promise<number>{
    console.log(newUser)
    if(newUser.password != undefined && newUser.username != undefined){
      const  userForRequest : newUserInterface = {
        username: newUser.username,
        password: newUser.password,
        prenom: newUser.prenom,
        nom: newUser.nom,
        secret: newUser.secret,
       }

    try {
      const response : any = await this.http.post(urls_apis.API_CREATE_USER,userForRequest).toPromise(); 
      if(response){
        return response.id;
      }else{
        throw new Error('erreur dans');
      }

    } catch (error) {
      console.log(error)
    }
    return 0;
  }
  return 0;
  }

  // async updateUser(newInfosUsers : User) : Promise<boolean> {

  //   if(newInfosUsers.id){
  //   const userForRequest : updateUserInterface = {
      
  //     id          : newInfosUsers.id,
  //     username    : newInfosUsers.username,
  //     password    : newInfosUsers.password != undefined ? newInfosUsers.password : "",
  //     firstname   : newInfosUsers.firstname,
  //     lastname    : newInfosUsers.lastname,
  //     mail        : newInfosUsers.email != undefined ? newInfosUsers.email : "",
  //     type        : newInfosUsers.type.value,
  //     role        : newInfosUsers.role.value,
  //     isActive    : newInfosUsers.state.value
  //   }

  //   try{
  //     await this.http.put(urls_apis.API_UPDATE_USER,userForRequest).toPromise(); 
  //     return true;
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   }
  //   return false;
  // }

  // async deleteUser(id : number): Promise<any>{
  //   let retour : any; 
  //   try{
  //     retour = await this.http.delete(urls_apis.API_DELETE_USER + id).toPromise(); 
      
  //   } catch (error) {
  //     retour = error
  //   }
  //   return retour;
  // }
}
