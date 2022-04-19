
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';


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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }