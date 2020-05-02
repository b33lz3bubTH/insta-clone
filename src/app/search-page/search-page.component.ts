import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserActions } from 'src/services/user-actions.service'
import { UserDetails } from 'src/services/user-details.service';
import { UserAuthentication } from 'src/services/user-authentication.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchTerm = '';
  dataFromBackend:any = [];
  constructor(private route: ActivatedRoute, private userAuthServObj: UserAuthentication ,private userActionsServObj: UserActions, public userServObj: UserDetails) { 
    this.route.params.subscribe(
      (params : Params) => {
        this.ngOnInit(); // not cool at all to do this. not cool must be taken care **later**
      }
    );
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['searchTerm'];
    this.userActionsServObj.fetchList(this.searchTerm).subscribe(res => {
      this.dataFromBackend = res['searched_for'];
      console.log(res['searched_for']);
    },err => {
      console.log(err);
    });
    
  }
  unfollowAUser(id: number, actualData){
    if(!this.userAuthServObj.isLoggedIn){
      return false;
    }
    this.userActionsServObj.unfollowAUser(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    actualData.state = false;
  }
  followAUser(id: number, actualData){
    if(!this.userAuthServObj.isLoggedIn){
      return false;
    }
    this.userActionsServObj.followAUser(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    actualData.state =true;
  }
}
