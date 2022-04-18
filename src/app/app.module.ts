// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UsersComponent } from './users/users.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { DatePipePipe } from './date-pipe.pipe';
// import { HighlightDirective } from './highlight.directive';
// import { FormsModule } from '@angular/forms';
// import { formComponent } from './form/form.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     DatePipePipe,
//     HighlightDirective,
//     formComponent,
    
    
    
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { formComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';
import { repoComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { ApiService } from './api.service';
// import { HttpClient } from '@angular/common/http'; 
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    formComponent,
    NotfoundComponent,
    HighlightDirective,
    DatePipePipe,
    UsersComponent,
    repoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,


    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }