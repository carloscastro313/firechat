import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireChatService {

  constructor(private dbFire : AngularFirestore, private datePipe : DatePipe) { }

  public getMsg(path : string){
    return this.dbFire.collection('/firechat/'+path+'/msg').valueChanges()
  }

  public sengMsg(path : string, msg : string, sendBy : string){
    this.dbFire.collection('/firechat/'+path+'/msg/').add({
      text : msg,
      from : sendBy,
      timeSend : this.datePipe.transform(new Date(),'MM-dd-yyyy hh:mm:ss')
    });
  }
}
