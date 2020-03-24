import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/shared/user-details.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor( public userobj: UserDetails) { }

  ngOnInit(): void {
  }
  __DEBUG__(x){
    console.log("val of x: " , x);
  }
}
