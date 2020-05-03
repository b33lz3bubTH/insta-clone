import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDetails } from '../../services/user-details.service';
import { PostStorage } from 'src/services/post-storage.service';
import { UserAuthentication } from 'src/services/user-authentication.service';
import { UserPost } from '../shared-models/posts.model';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit,OnDestroy {

  constructor(public userObj: UserDetails, public postServObj: PostStorage, public userAuthObj: UserAuthentication) {
    console.log(this.userObj);
   }

  ngOnInit(): void {
    if(this.userAuthObj.isLoggedIn) { // get your feed upto DATE //
      this.postServObj.fetchUsersPostWhomIFollow().subscribe(res =>{
        for (const element of res['data']) {
          // this.postServObj.allPost.push( Object.assign(new UserPost(), element) );
          // i hate this approch but had to do it. must be taken care of next.
          var _0xbb24=["\x61\x73\x73\x69\x67\x6E","\x70\x75\x73\x68","\x61\x6C\x6C\x50\x6F\x73\x74","\x70\x6F\x73\x74\x53\x65\x72\x76\x4F\x62\x6A"];this[_0xbb24[3]][_0xbb24[2]][_0xbb24[1]](Object[_0xbb24[0]]( new UserPost(),element))
        }
      },err => {
        console.log(err);
      })
    }
  }

  ngOnDestroy() {
    this.postServObj.allPost = [];
  }
}

