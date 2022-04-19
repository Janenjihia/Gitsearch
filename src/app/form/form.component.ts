
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class formComponent implements OnInit {
  // add intializer as quick fix
  // searchName!: string;
  user! : string;
  repo!: string
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.searchOutput.emit(this.user);
    this.user = "";
  }

}
