import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.sass' ]
} )
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
