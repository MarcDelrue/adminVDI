import { Component } from '@angular/core';
import { LoginComponent } from './page/login/login.component';
import { Datastore } from './services/datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Datastore]
})
export class AppComponent {
  title = 'app';
  page: string = 'categories';
  login = true;

  constructor(private datastore : Datastore) { }

  ngOnInit() {
  }

  changePage(page)
  {
    this.page = page;
  }
}
