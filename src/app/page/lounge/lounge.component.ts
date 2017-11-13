import { Component } from '@angular/core';
import { lounge } from './loungeClass';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.css']
})
export class LoungeComponent {
  boucles = [{department: '59', city: 'Lille', date: '04/12'},{department: '62', city: 'Saint-Omer', date: '06/12'},{department: '59', city: 'Valenciennes', date: '28/11'}];
  showAddLounge: boolean = true;
  newlounge = new lounge();
  constructor() {}

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

  addLounge(test) {
    console.log(test);
  this.showAddLounge = !this.showAddLounge;
    this.boucles.push({city: test.city, date: test.date.formatted, department: test.department});
  this.newlounge = new lounge();
  }

  removeLounge(test) {
    if (this.boucles.findIndex(x => x.city == test.city) == this.boucles.findIndex(x => x.date == test.date))
    this.boucles.splice(this.boucles.findIndex(x => x.city == test.city), 1);
  }
}
