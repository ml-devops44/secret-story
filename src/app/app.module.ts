import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Ajoutez BrowserAnimationsModule ici
    ToastModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [MessageService,CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
