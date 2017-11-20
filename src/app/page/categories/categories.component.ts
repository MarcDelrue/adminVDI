import { Component } from '@angular/core';
import { AddCategorieComponent } from './categorieAdd/categorieAdd.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSortModule } from '@angular/material';
import { Datastore } from '../../services/datastore.service';
import { Category, Company } from '../../models/reseauvdiModels.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [Datastore]
})
export class CategoriesComponent {
  categories: Category[];
  companies: Company[];
  // categories = [{name: "Bien être & Diététique", editing: false}, {name: "Soins & Beauté", editing: false}, {name: "Lingerie", editing: false}];
  // soc = [{name: "À la Claire Fontaine", editing: false}, {name: "Secrets de Miel", editing: false}, {name: "Allande-Tanais", editing: false}, {name: "Aromasun - Elixir d'Essences", editing: false}];
  newNameCat: string = '';
  fakechange: string;
  socSelected: any;
  showSoc: boolean = false;
  showAddSociety: boolean = false;
  showAddCategorie: boolean = true;

  constructor(public dialog: MatDialog, private datastore: Datastore) { }

  ngOnInit(){
    this.datastore.findAll(Category, {}).subscribe(
      data => {
        this.categories = data.getModels();
      });
      this.datastore.findAll(Company, {}).subscribe(
        data => {
          this.companies = data.getModels();
        });
  }

  inputCategorie() {
    this.showAddCategorie = !this.showAddCategorie;
  }

  showSocieties(category) {
    this.showSoc = true;
    this.socSelected = category.name;
    this.datastore.findRecord(Category, category.id, {include:"companies"}).subscribe((category: Category)=>console.log(category));
  }

  updateCategorie(category, choice) {
    if (choice == 'y')
    {
      category.name = this.fakechange;
      category.save().subscribe(json=>console.log(json));
    }
    this.fakechange = category.name;
    category.editing = !category.editing;
  }

  addCategorie(test) {
    // let dialogRef = this.dialog.open(AddCategorieComponent, {
    //   width: '300px',
    //  data: { name: this.newNameCat}
  //  });
  //
  //  dialogRef.afterClosed().subscribe(result => {
  this.showAddCategorie = !this.showAddCategorie;
  if (test != "")
  {
    let post = this.datastore.createRecord(Category, {name: test});
    post.save().subscribe(data=>this.categories.push(data));
    }
  this.newNameCat = "";
  // });
  }

  removeCategorie(test) {
    this.datastore.deleteRecord(Category, test.id).subscribe(() => {
    });
      this.categories.splice(this.categories.findIndex(x =>x.name === test.name), 1);
  }
}
