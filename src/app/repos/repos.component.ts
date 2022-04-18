// import { Component, OnInit } from '@angular/core';
// import { repos } from '../repo';
// import { User } from '../user';

// @Component({
//   selector: 'app-repos',
//   templateUrl: './repos.component.html',
//   styleUrls: ['./repos.component.css']
// })

// comented out for debugging


// export class ReposComponent implements OnInit {
//   repos: RepoInterface[]=[

//   ];

//   constructor( private reposervice:RepoInterface) { }

//   ngOnInit(): void {

//     this.reposervice. getRepos().subscribe((repos: RepoInterface[])=>{
//       this.repos=repos)
//   }

// }

// commented out for debugging

// export class ReposComponent implements OnInit {

//   repo!: repos;
//   constructor( public repoService: repos ) { }

//   getRepo(searchName: string){
//     this.repoService.getRepos(searchName).then(
//       (data: any)=>{
//         this.repo =this.repoService.repos
//         console.log(this.repo);
//       },
//       (error: any)=>{
//         console.log(error);
//       }
//     );
//   }

//   ngOnInit() {
//     this.getRepo('janenjihia');
//   }
 
// }


  
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Repos } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class repoComponent implements OnInit {

  // repo!: Repos;
  // constructor( public repoService: ApiService) { }

  // repoSearch(searchName: string){
  //   this.repoService.getReopos(searchName).then(
  //     (results: any)=>{
  //       this.repo =this.repoService.allRepos
  //       console.log(this.repo);
  //     },
  //     (error: any)=>{
  //       console.log(error);
  //     }
  //   );
  // }

  // ngOnInit() {
  //   this.repoSearch('janenjihia');
  // }

  public repo:any=[];

  constructor(private apiService: ApiService) { 
    this.apiService.getRepo().subscribe((response: any) => {
      this.repo = response;
      console.log(response);
      
    })
  }

  ngOnInit(): void {
  }
 
}