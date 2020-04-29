import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/services/user-details.service';
import { PostStorage } from 'src/services/post-storage.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor( public userobj: UserDetails, public postServObj: PostStorage) { }

  ngOnInit(): void {
  }
  __DEBUG__(x){
    console.log("val of x: " , x);
  }
}
