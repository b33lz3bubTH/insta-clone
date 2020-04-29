import { Component, OnInit } from '@angular/core';
import { UserAuthentication } from 'src/services/user-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userAuthObj: UserAuthentication) { }

  ngOnInit(): void {
  }

}
