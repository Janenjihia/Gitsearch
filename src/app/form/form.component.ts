
import { Component, OnInit, } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class formComponent implements OnInit {
  // add intializer as quick fix
  // searchName!: string;
  // user! : string;
  // repo!: string
  // @Output() searchOutput = new EventEmitter<any>()
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }
  // search(){
  //   this.apiservice.getRepo().subscribe((response:any)=>{
  //     this.repo=response
  //   })
  //   this.apiservice.getUserInfo().subscribe((response:any)=>{
  //     this.user=response
  //   })
  //   // this.searchOutput.emit(this.user);
  //   // this.user = "";
  // }

}
