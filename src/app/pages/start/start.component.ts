import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogShirtComponent } from './components/dialog-shirt/dialog-shirt.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogShirtComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

}
