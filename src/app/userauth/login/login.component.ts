import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthentication } from 'src/services/user-authentication.service';
import { UserDetails } from 'src/services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;
  constructor(private userServObj: UserAuthentication, private userObjServ: UserDetails, private _router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.userServObj.loginUser(this.loginForm.value).subscribe( res => {
      console.log(res);
      this.userObjServ.setJWTToLocal(res['jwt']['access_token'], res['uuid'], res['username']);
      this.userServObj.isLoggedIn = true;
      console.log('USER OBJ SERV: ', this.userObjServ);
      this._router.navigate(['/']); // go to the homepage.
    }, err => {
      console.log(err);
    })
  }

}
