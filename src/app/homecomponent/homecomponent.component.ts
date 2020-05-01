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
          this.postServObj.allPost.push( Object.assign(new UserPost(), element) );
          // i hate this approch but had to do it. must be taken care of next.
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
