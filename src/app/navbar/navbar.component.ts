import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserAuthentication } from 'src/services/user-authentication.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/services/user-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchBox', {static:false}) searchBoxRef: ElementRef;
  
  constructor(public userAuthObj: UserAuthentication, private route: Router, public userServObj: UserDetails){}

  ngOnInit(): void {
  }
  search_term(){
    if(this.searchBoxRef.nativeElement.value.length < 3) return;
    this.route.navigate(['/search-page', this.searchBoxRef.nativeElement.value]);
  }
  logout(){
    console.log("LOGOUT");
    localStorage.clear();
    this.userAuthObj.isLoggedIn = false;
    this.userServObj.logoutAction();
  }
}
