

import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Repos } from './repo';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  // constructor(private http: HttpClient) {
  //   this.foundUser = new User("","","","",0,0,0,"",new Date);
  //   this.allRepos = new Repos("","","",new Date,0,0,"");
  // }

  // searchUSer(searchName: string) {
   
  //   interface Responce {
  //     url:string,
  //     login: string;
  //     html_url:string;
  //     location:string
  //     public_repos:number;
  //     followers:number;
  //     following:number;
  //     avatar_url:string;
  //     created_at:Date;
  //   }

  //   return new Promise<void>((resolve, reject) => {
  //     this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
  //       (result) => {
  //         this.foundUser= result;
  //         console.log(this.foundUser);
  //         resolve();
  //       },
  //       (error) => {
  //         console.log(error);
  //         reject();
  //       }
  //     );
  //   });
  // }
  // getReopos(searchName: string){
  //   interface Repos{
  //     name:string;
  //     html_url:string;
  //     description:string;
  //     forks:number;
  //     watchers_count:number;
  //     language:string;
  //     created_at:Date;
  //   }
  //   return new Promise<void>((resolve,reject)=>{
  //     this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
  //       (results) => {
  //         this.allRepos = results;
  //         resolve();
  //       },
  //       (error) => {
  //         console.log(error);
  //         reject();
  //       }
  //     );
  //   });


  private userName: string;

  constructor(private http: HttpClient) { 
    console.log("service")
    this.userName = "janenjihia"
  }
  // userinfo
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName).pipe(map((data: any) => {
      return data;
    }));
  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?api_key=" + environment.apiKey).pipe(map((data: any) => {
      return data
    }));
  }
  }



