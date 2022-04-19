

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userName: string;

  constructor(private http: HttpClient) { 
    // console.log("service")
    this.userName = "janenjihia"
  }
  // userinfo
  // getUserInfo() {
  //   return this.http.get("https://api.github.com/users/" + this.userName).pipe(map(data => {
  //     return data;
  //   }));
  // }
  // getRepo() {
  //   return this.http.get("https://api.github.com/users/" + this.userName + "/repos?api_key=" + environment.apiKey).pipe(map((data) => {
  //     return data
  //   }));
  // }

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
    this.userName=userName
  }
  
  }



