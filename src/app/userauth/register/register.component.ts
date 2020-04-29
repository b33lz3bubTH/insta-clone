import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthentication } from 'src/services/user-authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;

  constructor(private userServObj: UserAuthentication) { }

  ngOnInit(): void {
  }
  
  register(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.password !== this.loginForm.value.conform_password){
      console.log("pass doesnt match");
      //throw an error if doesnt match
      //as of now just returning and dropping the api call.
    }
    // api call to post the request.
    this.userServObj.registerANewAccount(this.loginForm.value).subscribe(response => {
      console.log("ACCOUNT CREATED");
      console.log(response);
      this.loginForm.reset();
    }, err => {
      console.log("ERROR OCCURED", err.error.msg.msg);
    });
  }
}

// when ever error occuring err.error.msg.msg must give me the the actual error message