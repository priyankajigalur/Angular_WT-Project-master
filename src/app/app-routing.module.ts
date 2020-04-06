import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermComponent } from './term/term.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'home' , component:HomeComponent},
  {path : 'reg', component:RegisterComponent},
  {path : 'feed' , component:FeedbackComponent},
  {path : 'terms' , component:TermComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
