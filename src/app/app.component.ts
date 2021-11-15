import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.sass' ]
} )
export class AppComponent implements OnInit {

  constructor() {
    console.log( AOS ); // loaded script
  }

  ngOnInit(): void {
    AOS.init();
  }
}
