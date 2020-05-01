import { Component, OnInit, Input } from '@angular/core';
import {UserPost, Comment} from '../shared-models/posts.model';
import { UserDetails } from 'src/services/user-details.service';

@Component({
  selector: 'app-userspost',
  templateUrl: './userspost.component.html',
  styleUrls: ['./userspost.component.css']
})
export class UserspostComponent implements OnInit {
  @Input('postObj') pobj: UserPost;
  constructor(private  userobj: UserDetails) { }

  ngOnInit(): void {
  }
  likePost(x,y){
    console.log(this.userobj.username, "LIKED a post with ID: ", x);
    console.log(y);
    y.hasLiked = true;
    y.totalLikeCount++;
    //HTTP call to like
  }
  unlikePost(x,y){
    console.log(this.userobj.username, "UN-LIKED a post with ID: ", x);
    console.log(y);
    y.hasLiked = false;
    y.totalLikeCount--;
    //HTTP call to unlike
  }
  commentOnPost(comment, postCommentedOnId, ActualPostObj){
    console.log("Comment: ", comment);
    console.log("on Post: ", postCommentedOnId);
    console.log("Actual Post OBj: ", ActualPostObj);
    ActualPostObj.setCommentOnPost(this.userobj.username,comment);
    console.log("Actual Post OBj: ", ActualPostObj);

  }
}
