import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorieAdd.component.html',
  styleUrls: ['./categorieAdd.component.css'],
})
export class AddCategorieComponent {
  constructor(
    public dialogRef: MatDialogRef<AddCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  name: string;
  onNoClick() {
    console.log("OUT BITCHIES");
    this.dialogRef.close();
  }
}
