import { Component } from '@angular/core';
import { Datastore } from '../../services/datastore.service';
import { Company, Category, User } from '../../models/reseauvdiModels.model';

@Component({
  selector: 'app-societies',
  templateUrl: './societies.component.html',
  styleUrls: ['./societies.component.css'],
  providers: [Datastore]
})
export class SocietiesComponent {
  companies: Company[];
  categories: Category[];
  users: User[];
  fakechange= {
    name: '',
    category: ''
  };
  newCompany= {
    name: '',
    category: ''
  };
  // newCompany: Company[];
  showAddSociety: boolean = true;
  constructor(private datastore: Datastore) {}

  ngOnInit(){
    this.datastore.findAll(Company, {include: 'category'}).subscribe(
      data => {
        console.log(data);
        this.companies = data.getModels();
      });
    this.datastore.findAll(Category, {}).subscribe(
      data => {
        this.categories = data.getModels();
      });
  }

  removeCompany(selectedCompany) {
    this.datastore.deleteRecord(Company, selectedCompany.id).subscribe(data=> {console.log(data)});
    this.companies.splice(this.companies.findIndex(x => x.name == selectedCompany.name), 1);
  }

  createSociety(newcompany) {
  this.showAddSociety = !this.showAddSociety;
  if (newcompany.name != "")
  {
    newcompany.category = this.datastore.peekRecord(Category, newcompany.category);
    let company = this.datastore.createRecord(Company, {name: newcompany.name, category: newcompany.category});
    company.save({include: 'category'}).subscribe(data=>{
      console.log(data);
      this.companies.push(data);
  });
  }
  this.newCompany.name = "";
  this.newCompany.category = "";
  }

  updateSociety(company, choice) {
    console.log(company);
    console.log(this.fakechange.category);
    if (choice == 'y')
    {
      company.name = this.fakechange.name;
      company.category = this.fakechange.category;
      // company.category.id = this.fakechange.category;
      company.save().subscribe(
        data=>{
          console.log(data);
          company.category = data.category;
        });
    }
    this.fakechange.category = company.category;
    this.fakechange.name = company.name;
    company.editing = !company.editing;
  }
}
