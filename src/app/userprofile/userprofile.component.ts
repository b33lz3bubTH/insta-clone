import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/services/user-details.service';
import { PostStorage } from 'src/services/post-storage.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UserAuthentication } from 'src/services/user-authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor( public userServObj: UserDetails, public userobj: UserDetails, public postServObj: PostStorage, private route: ActivatedRoute, public userAuthObj: UserAuthentication) { 
    this.route.params.subscribe(
      (params : Params) => {
        this.ngOnInit(); // not cool at all to do this. not cool must be taken care **later**
      }
    );
  }
  logout(){
    console.log("LOGOUT");
    localStorage.clear();
    this.userAuthObj.isLoggedIn = false;
    this.userServObj.logoutAction();
  }
  ngOnInit(): void {
    // users profile details
    this.userobj.getCurrentLoggedUserDetails(this.route.snapshot.params['id']).subscribe(res => {
      console.log(res);
      this.userobj.setDetails(res['data']['username'], res['data']['followerCount'], res['data']['followingCount']);
    }, err => {
      console.log(err);
    });
    // users profile posts.
    this.postServObj.fetchCurrentUsersPost(this.route.snapshot.params['id']).subscribe(res => {
      console.log(res['data']);
      this.postServObj.userposts = res['data'];
    }, err =>{
      console.log(err);
    })
  }
  __DEBUG__(x){
    console.log("val of x: " , x);
  }
}
