import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent as Search00Component} from './search00/search.component';
import { SearchComponent as Search01Component} from './search01/search.component';
import { SearchComponent as Search02Component} from './search02/search.component';
import { SearchComponent as Search03Component} from './search03/search.component';
import { SearchComponent as Search04Component} from './search04/search.component';
import { from } from 'rxjs/observable/from';


@NgModule({
  declarations: [
    AppComponent,
    Search00Component,
    Search01Component,
    Search02Component,
    Search03Component,
    Search04Component
  ],
  imports: [BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
