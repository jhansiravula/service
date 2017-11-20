import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstUser:string;
  constructor(private dataService:DataService){}

  ngOnInit(){
    this.firstUser = this.dataService.getFirstUser();
  }

}
