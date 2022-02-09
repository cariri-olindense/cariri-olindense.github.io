import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exposition',
  templateUrl: './exposition.component.html',
  styleUrls: ['./exposition.component.scss']
})
export class ExpositionComponent implements OnInit {

  // Screen
  smallScreen: boolean;
  menu: boolean;

  constructor( ) { }

  ngOnInit() {
    this.smallScreen = window.innerWidth < 568;
    this.menu = false;
  }

}
