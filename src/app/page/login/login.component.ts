import { Component } from '@angular/core';
import { Datastore } from '../../services/datastore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private datastore : Datastore) { }
}
