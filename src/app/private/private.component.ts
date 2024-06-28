import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit{

  constructor(
    private authService : AuthenticationService
  ){}
  ngOnInit(): void {
      this.authService.startTokenRefresh().subscribe();
  }
}
