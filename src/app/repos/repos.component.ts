import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Repos } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class repoComponent implements OnInit {

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