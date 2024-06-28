import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public user : string = ""; 

  constructor(
    private authService :AuthenticationService, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.user = this.authService.getIdentity()
  }

  public deconnexion(){
    this.authService.logout();
    this.router.navigate(['/public']);
  }
}
