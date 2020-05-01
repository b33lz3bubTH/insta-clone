import { Injectable } from "@angular/core";
import { UserDetails } from './user-details.service';

@Injectable({providedIn: 'root'})
export class BackendDetails{
    baseApi = 'http://localhost:8000/';
    registrationApi = this.baseApi + 'register';
    loginApi = this.baseApi + 'login'; 
    fetchUserDetailsApi = (uuid) => this.baseApi + 'get-user-details/' + uuid;
    postingPostAPI = (uuid) => this.baseApi + 'new-post/' + uuid;
    getCurrenUserPost = (uuid) => this.baseApi + 'get-posts/' + uuid;
    searchApi = (uuid) => this.baseApi + 'search/' + uuid;
    followUserApi = (uuid) => this.baseApi + 'follow/' + uuid;
    getPostForFollowingUsers = (uuid) => this.baseApi + 'get-following-posts/' + uuid;
}