import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component( {
  selector: 'app-preflight-checks',
  templateUrl: './preflight-checks.component.html',
  styleUrls: [ './preflight-checks.component.sass' ]
} )
export class PreflightChecksComponent implements OnInit {
  page: string = this.constructor.name;

  blog: Blog = {
    readTime: '10 minutes',
    title: 'Pre-Flight Checks',
    content: [ 'My Story', 'Helpful Resources' ],
    image: 'assets/img/Koeln-Brueke.jpg',
    likes: 0,
    url: '/pre-flight-checks'
  }

  clicked: boolean = false;

  constructor( public blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogService.checkBlog( this.page, this.blog ).then( blog => {
      this.blog = blog
    } );
  }

}
