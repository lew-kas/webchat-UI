import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from "../models/message";
import {ActivatedRoute, Route, Routes} from "@angular/router";
import {Observable} from "rxjs";
import {UserListComponent} from "./user-list/user-list.component";
import {User} from "../models/user";
import {UserService} from "../user.service";
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Message[] = [];
  message: string;
  selectedUser: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private chatService: ChatService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.route.snapshot.paramMap.getAll('param1'));
      this.selectedUser= this.route.snapshot.paramMap.get('param1');
    });
  }

  sendMessage(text: string): void {
    let msg: Message = new Message();
    msg.text = text;
    msg.userName = this.userService.getUserNameById(+this.selectedUser);

    this.chat = this.chatService.sendMessage(msg);
  }

}
