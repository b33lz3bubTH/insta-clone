import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  
  register(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.password !== this.loginForm.value.conform_password){
      console.log("pass doesnt match");
      //throw an error like password doesnt match
    } 
  }
}
