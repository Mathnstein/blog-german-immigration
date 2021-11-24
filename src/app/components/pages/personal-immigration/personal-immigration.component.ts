import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';
import { SEOService } from 'src/app/services/seo.service';
import { allBlogs } from 'src/allBlogs';

@Component( {
  selector: 'app-personal-immigration',
  templateUrl: './personal-immigration.component.html',
  styleUrls: [ './personal-immigration.component.sass' ]
} )
export class PersonalImmigrationComponent implements OnInit {
  blog: Blog = allBlogs.PersonalImmigration;

  page = this.blog.url;

  clicked: boolean = false;

  constructor( private blogService: BlogService, private seoService: SEOService ) { }

  ngOnInit(): void {
    console.log( this.blog )
    this.blogService.updateBlog( this.page, this.blog ).then( blog => {
      this.blog = blog
    } );

    this.seoService.extractBlogTags( this.blog );
  }

}
