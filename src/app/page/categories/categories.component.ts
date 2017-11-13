import { Component } from '@angular/core';
import { AddCategorieComponent } from './categorieAdd/categorieAdd.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSortModule } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  boucles = [{name: "Bien être & Diététique", editing: false}, {name: "Soins & Beauté", editing: false}, {name: "Lingerie", editing: false}];
  soc = [{name: "À la Claire Fontaine", editing: false}, {name: "Secrets de Miel", editing: false}, {name: "Allande-Tanais", editing: false}, {name: "Aromasun - Elixir d'Essences", editing: false}];
  newNameCat: string = '';
  fakechange: string;
  socSelected: any;
  showSoc: boolean = false;
  showAddSociety: boolean = false;
  showAddCategorie: boolean = true;
  constructor(public dialog: MatDialog) {}

  inputCategorie() {
    this.showAddCategorie = !this.showAddCategorie;
  }

  showSocieties(categorie) {
    this.showSoc = true;
    this.socSelected = categorie.name;
  }

  updateCategorie(boucle, choice) {
    if (choice == 'y')
      boucle.name = this.fakechange;
    this.fakechange = boucle.name;
    boucle.editing = !boucle.editing;
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
    this.boucles.push({name: test, editing: false});
  this.newNameCat = "";
  // });
  }

  removeCategorie(test) {
    this.boucles.splice(this.boucles.findIndex(x => x.name == test.name), 1);
  }
}
