import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  msg:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.cast.subscribe(msg=> this.msg = msg);
  }

}
