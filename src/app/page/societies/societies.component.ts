import { Component } from '@angular/core';

@Component({
  selector: 'app-societies',
  templateUrl: './societies.component.html',
  styleUrls: ['./societies.component.css']
})
export class SocietiesComponent {
  boucles = [{name: "À la Claire Fontaine", editing: false}, {name: "Secrets de Miel", editing: false}, {name: "Allande-Tanais", editing: false}, {name: "Aromasun - Elixir d'Essences", editing: false}];
  fakechange: string;
  newNameSoc: string = '';
  showAddSociety: boolean = true;
  constructor() {}

  removeSoc(test) {
      this.boucles.splice(this.boucles.findIndex(x => x.name == test.name), 1);
  }

  addSociety(test) {
  this.showAddSociety = !this.showAddSociety;
  if (test != "")
    this.boucles.push({name: test, editing: false});
  this.newNameSoc = "";
  }

  updateSociety(boucle, choice) {
    if (choice == 'y')
      boucle.name = this.fakechange;
    this.fakechange = boucle.name;
    boucle.editing = !boucle.editing;
  }
}
