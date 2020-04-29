import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendDetails } from 'src/services/backend-details.service';

@Injectable({providedIn:'root'})
export class UserDetails {
    username:string = "Sourav"; // set this
    profileLink:string = "https://i.imgur.com/hqXuRsh.png"; //good plan with this.
    followerCount: number = 420; // set this
    followingCount:number = 69; // set this
    description: string = "WELCOME TO MY PROFILE";
    //fetch from backend and init all these.
    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){

    }
    registerANewAccount(inputObj){
        const backendApiData = {
            "username": inputObj.username,
            "email": inputObj.email,
            "password": inputObj.password
        }
        return this.http.post(this.backendConfigObj.registrationApi, backendApiData, {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        });
    }
    loginUser(inputObj){
        const backendApiData = {
            "username":inputObj.username,
            "password":inputObj.password
        }
        return this.http.post(this.backendConfigObj.loginApi, backendApiData, {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        });
    }
}