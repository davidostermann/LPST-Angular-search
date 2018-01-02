import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { tap, toArray, map, filter } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  sortBy: (
    key: string
  ) => (source: Observable<any[]>) => Observable<any[]> = key =>
    map((arr: any[]) => {
      console.log(`arr ${arr.map(x => x.name)}`);
      return arr.sort((a: any, b: any) => {
        return a[key] > b[key] ? 1 : -1;
      });
    });
  getAll(): Observable<User[]> {
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     tap(x => console.log(`tap x : ${x}`)),
    //     map(x => {
    //       console.log(`x : ${x}`);
    //       return 3;
    //     }),
    //     filter(x => x > 5)
    //   )
    //   .subscribe(x => console.log(`coucou ${x}`));

    return this.http
      .get('http://localhost:3000/users')
      .pipe(this.sortBy('name'));
  }
  search(term): Observable<User[]> {
    return this.http.get(`http://localhost:3000/users?q=${term}`) as Observable<User[]>;
  }
}
