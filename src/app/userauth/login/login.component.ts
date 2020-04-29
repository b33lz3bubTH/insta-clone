import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetails } from 'src/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;
  constructor(private userServObj: UserDetails) { }

  ngOnInit(): void {
  }
  login(){
    this.userServObj.loginUser(this.loginForm.value).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
