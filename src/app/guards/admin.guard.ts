import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { RoleEnum } from '../common/enums/role.enum';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router,private messageService : MessageService) {}

  canActivate(): boolean {
    if (this.authService.hasRole(RoleEnum.ADMIN)) {
      return true;  // Accès autorisé pour les utilisateurs avec le rôle 'admin'
    } else {
      // Rediriger vers une page d'interdiction d'accès
      this.messageService.add({ severity: 'error', summary: 'Action non autorisée ! ', detail: 'Vous n\'avez pas les autorisations nécéssaire pour accedez à cette page' });
      return false;
    }
  }
}