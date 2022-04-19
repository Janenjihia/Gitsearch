
import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

public userName: string="";
public user: any = [];
public repo:any=[];
  
constructor( private apiService: ApiService) { 
  this.apiService.getUserInfo().subscribe((response: any) => {
    this.user = response;
    console.log(response);
    
  }) 
  this.apiService.getRepo().subscribe((response: any) => {
    this.repo = response;
    console.log(response);
    
  })

}

  search(){
    this.apiService.getRepo().subscribe((response:any)=>{
      this.repo=response
    })
    this.apiService.getUserInfo().subscribe((response:any)=>{
      this.user=response
    })
    // this.searchOutput.emit(this.user);
    // this.user = "";
  }
ngOnInit(): void {
}
}
