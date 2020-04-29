import { Injectable } from "@angular/core";
import {UserPost} from "../app/shared-models/posts.model";

@Injectable({providedIn:'root'})
export class PostStorage {
    allPost: UserPost[] = [
        new UserPost("0x00souraav_",22,"https://via.placeholder.com/1000",150,"Cities of Eutropia","Dream To be free", true),
        new UserPost("test_user_1",23,"https://via.placeholder.com/1000",110,"Immoral Souls of the heavens","Dream To be free",false),
        new UserPost("rohit",25,"https://via.placeholder.com/1000",1120,"Cities of Eutropia","Dream To be free",false)
    ];
    userposts: UserPost[] = [
        new UserPost("Sourav",10,'https://via.placeholder.com/1000',100,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",11,'https://via.placeholder.com/1000',102,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",13,'https://via.placeholder.com/1000',99,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",15,'https://via.placeholder.com/1000',1,'lorem ipsum','Dolor*555',false),
        new UserPost("Sourav",20,'https://via.placeholder.com/1000',5,'lorem ipsum','Dolor*555',false)

    ];

    //fetch from backend and init all these.
    // new UserPost(WHOS POST(username),POST_ID,IMGLINK,TOTAL LIKES,POST TITLE,POST DESCRIPTION, LOGGED_IN_USER_LIKED_IT_OR_NOT),
}