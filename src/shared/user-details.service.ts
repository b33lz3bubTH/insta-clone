import { Injectable } from "@angular/core";
import { UserPost } from 'src/app/shared-models/posts.model';

@Injectable({providedIn:'root'})
export class UserDetails {
    username:string = "Sourav";
    profileLink:string = "https://i.imgur.com/hqXuRsh.png";
    followerCount: number = 420;
    followingCount:number = 69;
    description: string = "WELCOME TO MY PROFILE";
    allPost: UserPost[] = [
        new UserPost("sagnik",22,"https://i.imgur.com/yPzhR5e.png",150,"Cities of Eutropia","Dream To be free", true),
        new UserPost("test_user_1",23,"https://i.imgur.com/hqXuRsh.png",110,"Immoral Souls of the heavens","Dream To be free",false),
        new UserPost("rohit",25,"https://i.imgur.com/yPzhR5e.png",1120,"Cities of Eutropia","Dream To be free",false)
    ];
    userposts: UserPost[] = [
        new UserPost("Sourav",10,'https://i.imgur.com/hqXuRsh.png',100,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",11,'https://i.imgur.com/yPzhR5e.png',102,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",13,'https://i.imgur.com/yPzhR5e.png',99,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",15,'https://i.imgur.com/yPzhR5e.png',1,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",20,'https://i.imgur.com/hqXuRsh.png',5,'lorem ipsum','Dolor*555',false)

    ];

    //fetch from backend and init all these.
    // new UserPost(WHOS POST,POST_ID,IMGLINK,TOTAL LIKES,POST TITLE,POST DESCRIPTION, LOGGED_IN_USER_LIKED_IT_OR_NOT),
}