import {Injectable} from '@angular/core';
import {User} from "./models/user";

const user1 = {
  userName: "user1",
  pw: "pw1",
  id: 1
};
const user2 = {
  userName: "user2",
  pw: "pw2",
  id: 2
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    user1, user2
  ];

  constructor() {
  }

  getUserList(): User[] {
    return this.users;
  }

  checkLoginInfo(name: string, pw: string): number {
    for (let user of this.users) {
      if (name === user.userName && pw === user.pw) {
        console.log("success!");
        console.log(user.id);
        return user.id;
      }
    }
    window.alert("try again");
    return null;
  }

  getUserNameById(id: number): string {

    console.log(id + "getUserNameById");
    for (let user of this.users) {
      if (user.id === id) {
        return user.userName;
      }
    }
    console.log("cannot find username");
    return "";
  }
}
