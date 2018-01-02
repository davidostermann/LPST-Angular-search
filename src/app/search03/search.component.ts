import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search03',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users$: Observable<User[]>;
  term = new FormControl();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.term.valueChanges.subscribe( value => {
      this.users$ = this.userService.search(value);
    });
  }
}
