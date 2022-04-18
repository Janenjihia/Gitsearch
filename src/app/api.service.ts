// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, observable } from 'rxjs';
// import { UserInterface } from './user-interface';
// import { RepoInterface } from './repo-interface';
// import { UsersComponent } from './users/users.component';
// import { ReposComponent } from './repos/repos.component';
// import { environment } from 'src/environments/environment.prod';
// import { RepoInterface } from './repo';
// import { UserInterface } from './user';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   // BASE_URL: string= "https://github.com/"
//   User: UserInterface
//   Repos: RepoInterface;

//   constructor(private http:HttpClient) { 
//     this.User = new UserInterface("","",0,0,0,new Date);
//     this.Repos = new RepoInterface("","","",new Date,);
//   }

//   // getUsers():Observable<UserInterface>{
//   //   return this.get<UserInterface>(
//   //     this.BASE_URL +"users" )
//   // }
//   // get<T>(arg0: string): Observable<UserInterface> {
//   //   throw new Error('Method not implemented.');
//   // }
 
//   // getRepos():Observable<RepoInterface>{
//   //   return this.getRepos<RepoInterface>(
//   //     this.BASE_URL + "repos"
//   //   )

//   // }

//   getUSer(searchName: string){
   
//     interface Response {
//       url:string,
//       public_repos:number;
//       followers:number;
//       following:number;
//       created_at:Date;
//     }

//     return new Promise<UserInterface | void>((resolve, reject) => {
//       this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
//         (result) => {
//           this.User = result;
//           console.log(this.User);
//           resolve();
//         },
//         (error) => {
//           console.log(error);
//           reject();
//         }
//       );
//     });
//   }
//   getRepos(searchName: string){
//     interface Repos{
//       name:string;
//       url:string;
//       description:string;
//       created_at:Date;
//     }
//     return new Promise<RepoInterface | void>((resolve,reject)=>{
//       this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
//         (results) => {
//           this.getRepos = results;
//           resolve();
//         },
//         (error) => {
//           console.log(error);
//           reject();
//         }
//       );
//     });
//   }
// }

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
  // foundUser: User;
  // allRepos: Repos;
 

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



