import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-shirt',
  templateUrl: './dialog-shirt.component.html',
  styleUrls: ['./dialog-shirt.component.scss']
})
export class DialogShirtComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogShirtComponent>
  ) { }

  ngOnInit() {
  }

}
