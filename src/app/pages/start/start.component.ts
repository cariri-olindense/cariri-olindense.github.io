import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogShirtComponent } from './components/dialog-shirt/dialog-shirt.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  // Screen
  smallScreen: boolean;
  menu: boolean;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.smallScreen = window.innerWidth < 568;
    this.menu = false;
    const dialogRef = this.dialog.open(DialogShirtComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  ecommerce() {
    window.location.href = 'https://caririolindense.wixsite.com/loja';
  }
}
