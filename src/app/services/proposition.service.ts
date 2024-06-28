import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls_apis } from 'src/environments/api.env';

interface User{
  id: number;
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

@Injectable({
  providedIn: 'root'
})
export class PropositionService {

  constructor(
    private http  : HttpClient
    ) {}


    async addProposition(newProposition : proposition  ): Promise<number>{
      if(newProposition.user_selected){
        const  propositionForRequest  = {
          from_Iduser: newProposition.user_connected.id,
          idUser_secret: newProposition.user_secret.id,
          idUser_proposition: newProposition.user_selected.id
         }
  
      try {
        const response : any = await this.http.post(urls_apis.API_ADD_PROP,propositionForRequest).toPromise(); 
        if(response){
          return response.id;
        }else{
          throw new Error('erreur de suppression');
        }
  
      } catch (error) {
        console.log(error)
      }
      return 0;
      }
      return 0;
  
  }



  async updateProposition(newProposition : proposition) : Promise<boolean> {

    if(newProposition.idProposition ){

      const userProp : number = newProposition.user_selected ? newProposition.user_selected.id : 0

    const userForRequest  = {
      id          : newProposition.idProposition,
      from_Iduser: newProposition.user_connected.id,
      idUser_secret: newProposition.user_secret.id,
      idUser_proposition: userProp
    }

    try{
      await this.http.put(urls_apis.API_UPDATE_PROP,userForRequest).toPromise(); 
      return true;
    } catch (error) {
      console.log(error)
    }
    }
    return false;
  }

  async getPropositionUser(id : number) : Promise<any> {

    try {
      const response : any = await this.http.get(urls_apis.API_GET_PROPS+"/"+id).toPromise(); 
      if(response){
        return response;
      }else{
        throw new Error('erreur de suppression');
      }

    } catch (error) {
      console.log(error)
    }

  }

}
