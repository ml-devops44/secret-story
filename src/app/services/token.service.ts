import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private accessTokenKey  = 'access_token';
  private refreshTokenKey = 'refresh_token';
  
  constructor(
    private cookieService : CookieService,
    @Inject(DOCUMENT) private document: Document
    ){}

    getDomain(): string {
      const hostname = this.document.location.hostname;
      return hostname;
    }

    
  getAccessToken(): string|null {
    return localStorage.getItem(this.accessTokenKey);
  }


  getRefreshToken(): string|null {
    return this.cookieService.get(this.refreshTokenKey);
  }


  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }


  async setRefreshToken(token: string) {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 23);
   this.cookieService.set(this.refreshTokenKey,token, expirationDate,'/',this.getDomain(), environment.SECURE_COOKIE);
  }


  clearTokens(): void {
    if (this.cookieService.check(this.refreshTokenKey)) {
      try {
        this.cookieService.delete(this.refreshTokenKey,'/',this.getDomain(), environment.SECURE_COOKIE);
      } catch (error) {
        console.error('Erreur lors de la suppression du cookie :', error);
      }
    }
    localStorage.removeItem(this.accessTokenKey);
  }
}
