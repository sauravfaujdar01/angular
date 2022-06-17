import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectx';
constructor(
  private router:Router
){}

  navigate(data:string){

this.router.navigateByUrl('/'+data);
  }
}