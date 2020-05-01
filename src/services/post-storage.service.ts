import { Injectable } from "@angular/core";
import {UserPost} from "../app/shared-models/posts.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendDetails } from 'src/services/backend-details.service';
import { UserDetails } from './user-details.service';


@Injectable({providedIn:'root'})
export class PostStorage {
    constructor(private http: HttpClient, private backendConfigObj: BackendDetails, private userServObj: UserDetails){}
    allPost: UserPost[] = [];
    userposts: UserPost[] = [];
    // new UserPost("Sourav",20,'https://via.placeholder.com/1000',5,'lorem ipsum','Dolor*555',false)
    //fetch from backend and init all these.
    // new UserPost(WHOS POST(username),POST_ID,IMGLINK,TOTAL LIKES,POST TITLE,POST DESCRIPTION, LOGGED_IN_USER_LIKED_IT_OR_NOT),
    postTheDamnThing( args ) {
        let testData:FormData = new FormData();
        testData.append('file', args.file, args.name);
        testData.append('postTitle', args.postTitle);
        testData.append('postDesc', args.postDesc);

        console.log(testData);

        return this.http.post(this.backendConfigObj.postingPostAPI(this.userServObj.uuid), testData, {
            headers: new HttpHeaders().set('Authorization', ('Bearer ' + this.userServObj.jwtToken))
        });
    }

    fetchCurrentUsersPost(id: number){
        return this.http.get<UserPost[]>(this.backendConfigObj.getCurrenUserPost(id), {
        });
    }
    fetchUsersPostWhomIFollow(){
        return this.http.get<UserPost[]>(this.backendConfigObj.getPostForFollowingUsers(this.userServObj.uuid), {
            headers: new HttpHeaders().set('Authorization', ('Bearer ' + this.userServObj.jwtToken))
        });
    }

}