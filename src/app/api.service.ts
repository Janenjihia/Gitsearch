

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userName: string;

  constructor(private http: HttpClient) { 
    this.userName = "janenjihia"
  }
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName).pipe(map(data => {
      return data;
    }));
  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?api_key=" + environment.apiKey).pipe(map(data => {
      return data
    }));
  }
  getUserName (userName:string){
    this.userName=userName;
  }
  
  }



