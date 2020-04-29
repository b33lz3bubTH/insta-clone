import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BackendDetails{
    baseApi = 'http://localhost:8000/';
    registrationApi = this.baseApi + 'register';
    loginApi = this.baseApi + '/login';
}