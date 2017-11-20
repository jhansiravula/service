import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private msg = new BehaviorSubject<string>('default message');
  cast = this.msg.asObservable();
  constructor() { }
  users:string [] = ['john', 'jill', 'peter'];

  getFirstUser(){
    return this.users[0];
  }

  editMsg(newMsg){
    this.msg.next(newMsg);
  }


}
