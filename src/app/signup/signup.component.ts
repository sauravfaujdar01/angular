import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
  private router:Router,
  private data_storage: DataStorageService
){}

  ngOnInit(): void {
  }
  
  Sign_up_page(abc:any): void{
    this.data_storage.user_data.push(abc.value);
    console.log(this.data_storage.user_data) 
    this.router.navigateByUrl('/login');
     }

}
