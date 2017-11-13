import { Component } from '@angular/core';
import { LoginComponent } from './page/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page: string = 'categories';
  login = false;

  ngOnInit() {
    console.log("not connecter");
  }

  changePage(page)
  {
    this.page = page;
  }
}
