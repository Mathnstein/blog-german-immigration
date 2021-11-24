import { Component, OnInit } from '@angular/core';
import { allBlogs } from 'src/allBlogs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';
import { SEOService } from 'src/app/services/seo.service';

@Component( {
  selector: 'app-preflight-checks',
  templateUrl: './preflight-checks.component.html',
  styleUrls: [ './preflight-checks.component.sass' ]
} )
export class PreflightChecksComponent implements OnInit {
  blog: Blog = allBlogs.PreFlightChecks;

  page = this.blog.url;

  clicked: boolean = false;

  constructor( private blogService: BlogService, private seoService: SEOService ) { }

  ngOnInit(): void {
    this.blogService.checkBlog( this.page, this.blog ).then( blog => {
      this.blog = blog
    } );

    this.seoService.extractBlogTags( this.blog );
  }

}
