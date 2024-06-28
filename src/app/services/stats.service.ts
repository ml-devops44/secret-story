import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls_apis } from 'src/environments/api.env';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private http  : HttpClient
    ) {}


  async getGlobalStats():Promise<any> {
    try {
      const response : any = await this.http.get(urls_apis.API_GLOBAL_STATS).toPromise();
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  async getVersionsStats():Promise<any> {
    try {
      const response : any = await this.http.get(urls_apis.API_VERSIONS_STATS).toPromise();
      return response;
    } catch (error) {
      console.log(error)
    }
  }
  
}