import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthenticationService
  ) {}

  username!: string;
  password!: string;
  loading: boolean = false;

  ngOnInit(): void {
    // if (this.authService.getIsAuthenticated()) {
    //   this.router.navigate(['/private']);
    // } else {
    //   this.authService.refreshToken().then((response) => {
    //     if (response) {
    //       this.router.navigate(['/private']);
    //     }
    //   });
    // }

        if (this.authService.getIsAuthenticated()) {
      this.router.navigate(['/private']);
    } 
  }

  async connexion() {
    if (
      this.password != null &&
      this.username != null &&
      this.password != undefined &&
      this.username != undefined &&
      this.password != '' &&
      this.username != ''
    ) {
      this.loading = true;
      this.authService.login(this.username, this.password).then((response) => {
        if (response) {
          this.router.navigate(['/private']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Login ou mot de passe incorrect',
          });
        }
        this.loading = false;
      });
    } else {
      this.messageService.add({
        severity: 'info',
        summary: 'Champ vide',
        detail: 'Veuillez remplir tous les champs pour vous connecter',
      });
    }
  }
}
