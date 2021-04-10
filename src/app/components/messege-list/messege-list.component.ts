import { FireChatService } from './../../service/fire-chat.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-messege-list',
  templateUrl: './messege-list.component.html',
  styleUrls: ['./messege-list.component.scss']
})
export class MessegeListComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  listMsg : [];

  constructor(private fc : FireChatService) { }

  ngOnInit(): void {
    this.fc.getMsg('user').subscribe((aux : any) => {
      this.listMsg = aux;
      this.listMsg.sort((_a1 : any,_a2 : any)=>{
        return <any>new Date(_a1.timeSend).getTime()- <any>new Date(_a2.timeSend).getTime();
      });
      try{
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }catch(err){

      }
    });
  }

}
