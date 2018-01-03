import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { switchMap, filter, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search04',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users$: Observable<User[]>;
  term = new FormControl();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.term.valueChanges.pipe(
      filter(value => value.length > 3), // 3 caractères min.
      debounceTime(400), // ne déclenche la suite de la séquence (en prennant la derniere saisie) au minimum toutes les 400 millisecondes
      distinctUntilChanged(), // ne déclenche la suite de la séquence seulement si la valeur est différente de celle saisi il y a
      tap( value => console.log('1.value : ', value)), // log
      switchMap(value => this.userService.search(value)),
      // Je prends la dernier element emis et pas le dernier element arrivée (le requete au server ne prenne pas le meme temps)
      // afin d'être synchro avec la frappe utilisateur
      tap( value => console.table('2.value : ', value)),
    );
  }
}
