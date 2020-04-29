import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendDetails } from 'src/services/backend-details.service';

@Injectable({providedIn: 'root'})
export class UserDetails {
    uuid:number = 0;
    username:string = "Sourav"; // set this
    profileLink:string = "https://via.placeholder.com/1000"; //good plan with this.
    followerCount: number = 420; // set this
    followingCount:number = 69; // set this
    description: string = "WELCOME TO MY PROFILE";
    jwtToken = '';
    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){}

    setDetails(username, followerCount, followingCount){
        this.username = username;
        this.followerCount = followerCount;
        this.followingCount = followingCount;
    }

    getCurrentLoggedUserDetails() {
        return this.http.get(this.backendConfigObj.fetchUserDetailsApi(this.uuid), {
            headers: new HttpHeaders().set('Authorization', ('Bearer ' + this.jwtToken))
        });
    }


    setJWTToLocal(token,uuid){
        this.jwtToken = token;
        this.uuid = uuid;
        localStorage.setItem('JWT', token);
        localStorage.setItem('UUID', uuid);
    }
    getJwtFromLocal(){
        if (localStorage.getItem('JWT') && localStorage.getItem('UUID')){
            this.jwtToken = localStorage.getItem('JWT');
            this.uuid = +localStorage.getItem('UUID');
            return true;
        }
        return false;
    }
}