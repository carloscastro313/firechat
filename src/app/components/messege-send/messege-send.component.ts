import { FireChatService } from './../../service/fire-chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messege-send',
  templateUrl: './messege-send.component.html',
  styleUrls: ['./messege-send.component.scss']
})
export class MessegeSendComponent implements OnInit {

  msg : string = '';

  constructor(private fc : FireChatService) { }

  ngOnInit(): void {
  }

  send(){
    if(this.msg != ''){
      this.fc.sengMsg("user",this.msg,"admin");
      this.msg = '';
    }
  }

}
