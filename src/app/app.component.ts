import { Component } from '@angular/core';
import { UserDetails } from 'src/services/user-details.service';
import { UserAuthentication } from 'src/services/user-authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iggclone';
  constructor(private userObjServ: UserDetails, private userAuthObj: UserAuthentication){
    let res = this.userObjServ.getJwtFromLocal();
    this.userAuthObj.isLoggedIn = res;
  }
}
