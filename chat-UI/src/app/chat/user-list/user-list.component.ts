import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [];

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.users=this.userService.getUserList();
  }
}
