// import { Component, OnInit } from '@angular/core';
// import { UserInterface } from '../user';
// import { RepoInterface } from '../repo';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {

//   // users:UserInterface []=[

//   // ]

//   // constructor(private userservice:UserInterface) { }

//   // ngOnInit():void  {
//   //   this.userservice.getUsers().subscribe((users: UserInterface[])=>{
//   //     this.users=users)
 
//   //   }
//   // users:UserInterface []=[
//   // ]
//   // constructor(private userservice:UserInterface) { }
//   // ngOnInit():void  {
//   //   this.userservice.getUsers().subscribe((users: UserInterface[])=>{
//   //     this.users=users)
//   //   }
//   user!: UserInterface;
//   repo!: RepoInterface;
//   constructor(private userservice:UserInterface, private repoService:RepoInterface) {
//   }

//   search(searchName: string) {
//     this.userservice.getUSer(searchName).then(
//       (data: any)=>{
//         this.user = this.userservice.User;
//       },
//       (error: any)=>{
//         console.log(error)
//       }
//     );
//       this.repoService.getRepos(searchName).then(
//         (data: any)=>{
//           this.repo =this.repoService.Repos
//           console.log(this.repo);
//         },
//         (error: any)=>{
//           console.log(error);
//         }
//       );
//   }

//   ngOnInit() {
//     this.search('janenjihia');
//   }
  
//   }

import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { Repos } from '../repo';
import { User } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
// user!: User;
// repo!: Repos;
//   myService: any;
//   constructor(public userService: ApiService, private repoService: ApiService) {
//   }

//   searchs(searchName: string) {
//     this.myService.searchUSer(searchName).then(
//       (success: any)=>{
//         this.user = this.myService.foundUser;
//       },
//       (error: any)=>{
//         console.log(error)
//       }
//     );
//       this.repoService.getReopos(searchName).then(
//         (results: any)=>{
//           this.repo =this.repoService.allRepos
//           console.log(this.repo);
//         },
//         (error: any)=>{
//           console.log(error);
//         }
//       );
//   }

//   ngOnInit() {
//     this.searchs('janenjihia');
//   }

public user: any = [];
  
constructor(private     userService: ApiService) { 
  this.userService.getUserInfo().subscribe((response: any) => {
    this.user = response;
    console.log(response);
    
  }) }

ngOnInit(): void {
}
}
