import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router, RouterLink, Routes} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  name: string;
  passw: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  checkLoginInfo(name: string, pw: string): void {
    let id = this.userService.checkLoginInfo(name, pw);

    if (id != null) {
      this.router.navigate(['chat', id]);
    }
  }
}
