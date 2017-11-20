import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { lounge } from './loungeClass';
import {IMyDpOptions} from 'mydatepicker';
import { Company, User, Category, Event } from '../../models/reseauvdiModels.model';
import { Datastore } from '../../services/datastore.service';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.css'],
  providers: [DatePipe]
})
export class LoungeComponent {
  // events = [{department: '59', city: 'Lille', date: '04/12'},{department: '62', city: 'Saint-Omer', date: '06/12'},{department: '59', city: 'Valenciennes', date: '28/11'}];
  events: Event[];
  companies: Company[];
  users: User[];
  DatepickerDate: Object;
  showAddLounge: boolean = true;
  newlounge = new lounge();
  today = new Date();
  // todayDatepicker =  {year: this.today.getYear(), month: this.today.getMonth(), day: this.today.getDay()};
  constructor(private datastore: Datastore, private datePipe: DatePipe) {}

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    disableUntil: {day: this.today.getDate() - 1, month: this.today.getMonth() + 1, year: this.today.getUTCFullYear()},
    dateFormat: 'dd/mm/yyyy',
    height: '20px',
  };

  public myDatePickerOptionsNew: IMyDpOptions = {
    // other options...
    disableUntil: {day: this.today.getDate() - 1, month: this.today.getMonth() + 1, year: this.today.getUTCFullYear()},
    dateFormat: 'dd/mm/yyyy',
  };

  ngOnInit(){
    // console.log(this.today.getDate(), this.today.getMonth(), this.today.getUTCFullYear());
    // console.log(this.newlounge.date = {jsdate: new Date()});
    this.datastore.findAll(Event, {include: 'user'}).subscribe(
      data => {
        console.log(data);
        this.events = data.getModels();
      });
    this.datastore.findAll(Company, { include: 'category'}).subscribe(
      data => {
        console.log(data);
        this.companies = data.getModels();
      });
    this.datastore.findAll(User, {}).subscribe(
      data => {
        console.log(data);
        this.users = data.getModels();
      });
  }

  setDatepickerDate(date) {
    let memoDate = date;
    console.log(date);
    date = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.DatepickerDate = {formatted: date};
  }

  updateLounge(event) {
    event.date = this.DatepickerDate;
    event.date = event.date.formatted;
    event.save().subscribe(data=>console.log(data));
    event.date = this.DatepickerDate;
    event.date = event.date.jsdate;
    // console.log(event.date, this.DatepickerDate);
  }

  editLounge(event, update) {
    // if (event.editing)
    if (!event.editing)
      this.setDatepickerDate(event.date);
    if (update == "y")
    this.updateLounge(event);
    // else
    // event.date = event.date.jsdate;
    console.log(event.date)
    event.editing = !event.editing;
    // console.log(new Date().toJSON().toString());
    // console.log(event.date);
  }

  addLounge(event) {
    if (event.city !="" && event.company !="" && event.description != "")
    {
      event.user_id = '2';
      event.company = this.datastore.peekRecord(Company, event.company);
    let newEvent = this.datastore.createRecord(Event, {city: event.city, date: event.date.formatted, description: event.description, user: this.users[0], company: event.company});
      newEvent.save({}).subscribe(data=>{
        console.log(data);
        this.events.push(data);
      });
    this.showAddLounge = !this.showAddLounge;
    // this.events.push({city: event.city, date: event.date.formatted, department: event.department});
    this.newlounge = new lounge();
  }
  }

  removeLounge(event) {
    this.datastore.deleteRecord(Event, event.id).subscribe(data => {
      console.log(data);
    // deleted!
});
    this.events.splice(this.events.findIndex(x => x.id == event.id), 1);
  }
}
