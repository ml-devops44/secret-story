// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls_apis } from 'src/environments/api.env';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { Observable, interval, switchMap } from 'rxjs';
import { RoleEnum } from '../common/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated     : boolean     = false;
  private firstname           : string      = ""; 
  private lastname            : string      = "";
  private userRoles           : RoleEnum[]  = [];
  private refreshTokenInterval: number      = 10000; // 10 secondes

  constructor(
    private http          : HttpClient, 
    private tokenService  : TokenService, 
    private router        : Router
    ){}

    startTokenRefresh(): Observable<void> {
      return interval(this.refreshTokenInterval).pipe(
        switchMap(() => {
          this.refreshToken();
          return new Observable<void>();
        })
      );
    }

    
  async login(username: string, password: string): Promise<boolean> {
    try {
      const response: any = await this.http
        .post(urls_apis.API_LOGIN, { username, password })
        .toPromise();

      this.tokenService.setAccessToken(response.accessToken);     // Stockage du token d'acces
      this.tokenService.setRefreshToken(response.refreshToken);   // Stockage du refresh-token
      this.firstname  = response.user.firstname;                  // Stockage du prénom de l'utilisateur connecté
      this.lastname   = response.user.lastname;                   // Stockage du nom de l'utilisateur connecté
      this.clearRoles();                                          // On efface tous les roles 

      if(Array.isArray(response.user.role)){
        response.user.role.forEach((role: RoleEnum) => {
          this.addRole(role);                           // On ajoute le role de l'utilisateur
        });
      }else{
        this.addRole(response.user.role);
      }
      
      this.isAuthenticated = true;
      return true;
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  }

  getIdentity(){
    return (this.firstname + " " + this.lastname.toUpperCase());
  }

  getInitials(){
    return (this.firstname.charAt(0).toUpperCase() + this.lastname.charAt(0).toUpperCase());
  }


  async logout() {
    console.log('deconnexion');
    this.isAuthenticated = false;
    this.tokenService.clearTokens();
    this.clearRoles();
    this.router.navigate(['/public']);
  }


  async refreshToken(): Promise<boolean> {
    console.log("refresh token ...")
    try {
      const refreshToken  : string | null   = await this.tokenService.getRefreshToken();
      const response      : any             = await this.http.post(urls_apis.API_REFRESH_TOKEN, {refreshToken}).toPromise();
  
      if (response) {
        
        this.tokenService.setAccessToken(response.access_token);
        this.tokenService.setRefreshToken(response.refresh_token);
        this.firstname        = response.user.firstname;
        this.lastname         = response.user.lastname;
        this.isAuthenticated  = true;
        this.clearRoles();
        if(Array.isArray(response.user.role)){
          response.user.role.forEach((role: RoleEnum) => {
            this.addRole(role);                           // On ajoute le role de l'utilisateur
          });
        }else{
          this.addRole(response.user.role);
        }
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.isAuthenticated = false;
      return false;
    }
  }
  
  
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }


    // Ajouter un rôle à l'utilisateur
    addRole(role: RoleEnum): void {
      this.userRoles.push(role);
    }
  
    // Vérifier si l'utilisateur a un rôle spécifique
    hasRole(role: RoleEnum): boolean {
      return this.userRoles.includes(role);
    }
  
    // Effacer tous les rôles de l'utilisateur
    clearRoles(): void {
      this.userRoles = [];
    }
}
