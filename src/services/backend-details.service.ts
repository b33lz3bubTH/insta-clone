import { Injectable } from "@angular/core";
import { UserDetails } from './user-details.service';

@Injectable({providedIn: 'root'})
export class BackendDetails{
    baseApi = 'http://localhost:8000/';
    registrationApi = this.baseApi + 'register';
    loginApi = this.baseApi + 'login'; 
    fetchUserDetailsApi = (uuid) => this.baseApi + 'get-user-details/' + uuid;
}