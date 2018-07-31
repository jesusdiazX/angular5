import { Injectable } from '@angular/core';
import{AngularFireList,AngularFireDatabase} from  'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export  class UserService {

  userlist:AngularFireList<any>;
 

  
  constructor(private firebase:AngularFireDatabase) { }

  getUser(){

    return this.userlist=this.firebase.list('iuser') ;
    /*[
      { "id":1,"nombre":"hoddo","edad":23},
      { "id":2,"nombre":"hoddo","edad":23},
      { "id":3,"nombre":"hoddo","edad":23},
      { "id":4,"nombre":"hoddo","edad":23},
      { "id":5,"nombre":"hoddo","edad":23},
      { "id":6,"nombre":"hoddo","edad":23},
      { "id":7,"nombre":"Karla","edad":25},
      { "id":8,"nombre":"Dario","edad":29},
      { "id":9,"nombre":"carlos","edad":33},
      { "id":10,"nombre":"juan","edad":23},
      { "id":11,"nombre":"hector","edad":22}

       ];*/
       //this.userlist=this.firebase.list('users');
  }
}
