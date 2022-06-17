import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { SignupComponent } from './signup/signup.component';

const approutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'post_login', component:PostLoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(approutes)

  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
