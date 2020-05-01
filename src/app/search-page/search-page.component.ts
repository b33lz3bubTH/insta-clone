import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from 'src/services/user-actions.service'
import { UserDetails } from 'src/services/user-details.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchTerm = '';
  dataFromBackend:any = [];
  constructor(private route: ActivatedRoute, private userActionsServObj: UserActions, public userServObj: UserDetails) { }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.params['searchTerm'];
    this.userActionsServObj.fetchList(this.searchTerm).subscribe(res => {
      this.dataFromBackend = res['searched_for'];
      console.log(res['searched_for']);
    },err => {
      console.log(err);
    });
  }

  followAUser(id: number){
    this.userActionsServObj.followAUser(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
