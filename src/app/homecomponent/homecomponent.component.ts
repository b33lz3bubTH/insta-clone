import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../shared/user-details.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(public userObj: UserDetails) {
    console.log(this.userObj);
   }

  ngOnInit(): void {
    
  }
  
}
