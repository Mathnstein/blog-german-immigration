import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component( {
  selector: 'app-personal-immigration',
  templateUrl: './personal-immigration.component.html',
  styleUrls: [ './personal-immigration.component.sass' ]
} )
export class PersonalImmigrationComponent implements OnInit {
  blog: Blog = {
    readTime: '10 minutes',
    title: 'Personal Immigration',
    content: [ 'My Story', 'Helpful Resources' ],
    image: 'assets/img/Koeln-Brueke.jpg',
    likes: 0,
    url: '/personal-immigration',
    publishedOn: new Date( '2021-11-10' ),
  }

  page = this.blog.url;

  clicked: boolean = false;

  constructor( private blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogService.checkBlog( this.page, this.blog ).then( blog => {
      this.blog = blog
    } );
  }

}
