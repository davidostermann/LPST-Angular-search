import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search01',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: User[];
  term = 'coucou';

  constructor(private userService: UserService) {}

  ngOnInit() {}

  ngOnChanges(v) {
    console.log('v : ', v);
  }

  termModelChange() {
    this.userService.search(this.term).subscribe((u: User[]) => {
      this.users = u;
    });
  }
}
