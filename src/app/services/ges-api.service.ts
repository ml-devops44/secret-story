import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls_apis } from 'src/environments/api.env';

@Injectable({
  providedIn: 'root'
})
export class GesApiService {

  constructor(
    private http  : HttpClient
    ) {}


  async getALlEntries():Promise<any> {
    try {
      const response : any = await this.http.get(urls_apis.API_ALL_ENTRIES_ANONYM).toPromise();
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async getEntriesByIP(ip:string){
    try {
      const response : any = await this.http.get(urls_apis.API_GET_ALL_BY_IP + ip).toPromise();
      return response;
    } catch (error) {
      console.log(error)
    }
  }
  
}