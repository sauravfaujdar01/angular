import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private data_storage: DataStorageService,
    private router:Router) {
   
   }

  ngOnInit(): void {
  }

  Login_page(abc:any): void{
  this.data_storage.user_data.forEach(i => {
    if (i.email == abc.value.email && i.pass == abc.value.pass){
      this.router.navigateByUrl('/post_login');

    }
    // else{
    //   console.log("incorrect password or email id")
    // }
    });
    
  }
}

