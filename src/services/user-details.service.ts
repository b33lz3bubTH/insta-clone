import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendDetails } from 'src/services/backend-details.service';

@Injectable({providedIn: 'root'})
export class UserDetails {
    uuid:number = 0;
    username:string = ""; // set this
    profileLink:string = "https://via.placeholder.com/1000"; //good plan with this.
    followerCount: number = 0; // set this
    followingCount:number = 0; // set this
    description: string = "";
    jwtToken = '';
    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){}

    setDetails(username, followerCount, followingCount){
        this.username = username;
        this.followerCount = followerCount;
        this.followingCount = followingCount;
    }

    getCurrentLoggedUserDetails(id: number) {
        return this.http.get(this.backendConfigObj.fetchUserDetailsApi(id), {});
    }

    logoutAction(){
        this.jwtToken = "";
        this.username = '';
        this.uuid = 0;
    }

    setJWTToLocal(token,uuid, username){
        this.jwtToken = token;
        this.uuid = uuid;
        this.username = username;
        localStorage.setItem('JWT', token);
        localStorage.setItem('UUID', uuid);
        localStorage.setItem('username', username);
    }
    getJwtFromLocal(){
        if (localStorage.getItem('JWT') && localStorage.getItem('UUID') && localStorage.getItem('username')){
            this.jwtToken = localStorage.getItem('JWT');
            this.uuid = +localStorage.getItem('UUID');
            this.username = localStorage.getItem('username');
            return true;
        }
        return false;
    }
}