import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  msg:string;
  editedMsg:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.cast.subscribe(msg=> this.msg = msg);
  }
  editTheMessage(){
    console.log('adsfsa');
    this.dataService.editMsg(this.editedMsg);
  }

}
