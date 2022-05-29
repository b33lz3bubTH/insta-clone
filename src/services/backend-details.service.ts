import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BackendDetails{
    baseApi = 'https://097a-202-8-114-38.in.ngrok.io/';
    registrationApi = this.baseApi + 'register';
    loginApi = this.baseApi + 'login'; 
    fetchUserDetailsApi = (uuid) => this.baseApi + 'get-user-details/' + uuid;
    postingPostAPI = (uuid) => this.baseApi + 'new-post/' + uuid;
    getCurrenUserPost = (uuid) => this.baseApi + 'get-posts/' + uuid;
    searchApi = (uuid) => this.baseApi + 'search/' + uuid;
    followUserApi = (uuid) => this.baseApi + 'follow/' + uuid;
    getPostForFollowingUsers = (uuid) => this.baseApi + 'get-following-posts/' + uuid;
    loadImage = (image: string) => {
        console.log("ImageL ", image);
        return this.baseApi + image;
    };
}
