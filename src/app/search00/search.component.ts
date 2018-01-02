import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search00',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: User[];
  placeHolder = 'search here';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.term.valueChanges.subscribe( value => {
    //   console.log(value);
    //   this.userService.search(value)
    //   .subscribe( (u: User[]) => {
    //     this.users = u;
    //   });
    // });
  }

  termChange(value) {
    this.userService.search(value).subscribe((u: User[]) => {
      this.users = u;
    });
  }
}
