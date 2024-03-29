import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DataStorageService } from './services/data-storage.service';
import { PostLoginComponent } from './post-login/post-login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PostLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ], 
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
