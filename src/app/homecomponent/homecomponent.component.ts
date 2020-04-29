import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../services/user-details.service';
import { PostStorage } from 'src/services/post-storage.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(public userObj: UserDetails, public postServObj: PostStorage) {
    console.log(this.userObj);
   }

  ngOnInit(): void {
    
  }
  
}
