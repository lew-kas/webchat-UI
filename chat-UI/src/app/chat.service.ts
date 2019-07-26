import {Injectable} from '@angular/core';
import {Message} from "./models/message";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: Message[] = [];

  constructor() {
  }

  sendMessage(msg: Message): Message[] {

    this.messages.push(msg);

    return this.messages;
  }

  getMessages(): Message[]{
    return this.messages;
  }
}
