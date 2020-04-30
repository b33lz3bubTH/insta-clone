import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/services/user-details.service';
import { PostStorage } from 'src/services/post-storage.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor( public userobj: UserDetails, public postServObj: PostStorage) { 
    userobj.getCurrentLoggedUserDetails().subscribe(res => {
      console.log(res);
      this.userobj.setDetails(res['data']['username'], res['data']['followerCount'], res['data']['followingCount']);
    }, err => {
      console.log(err);
    });
    postServObj.fetchCurrentUsersPost().subscribe(res => {
      console.log(res['data']);
      postServObj.userposts = res['data'];
    }, err =>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }
  __DEBUG__(x){
    console.log("val of x: " , x);
  }
}
