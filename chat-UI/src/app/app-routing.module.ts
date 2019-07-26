import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {ChatComponent} from "./chat/chat.component";


const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LogInComponent },
  { path: 'chat/:param1', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
