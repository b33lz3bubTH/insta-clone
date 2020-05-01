import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthentication } from 'src/services/user-authentication.service';

@Injectable()
export class AfterLoggedAuthGuard implements CanActivate {
    constructor(private _router: Router,private  userObj: UserAuthentication) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.userObj.isLoggedIn){
            this._router.navigate(['/']);
        }
        return true;
    }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.userObj.isLoggedIn){
            this._router.navigate(['/']);
        }
        return true;
    }
}