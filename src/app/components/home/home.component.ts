import { Component, OnInit } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';
import { SEOService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';
import { allBlogs } from 'src/allBlogs';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
} )
export class HomeComponent implements OnInit {
  blogs: Observable<Blog[]>;

  seo = allBlogs.Home;

  metaTags: MetaDefinition[] = [
    { property: 'og:title', content: this.seo.title },
    { property: 'description', content: this.seo.content },
    { property: 'og:description', content: this.seo.content },
    { property: 'og:image', content: this.seo.image },
  ]

  constructor( private blogService: BlogService, private seoService: SEOService ) {
  }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs;

    this.seoService.createCanonicalLink();
    this.seoService.updateTitle( this.seo.title );
    this.seoService.updateMetaTags( this.metaTags )
  }

}
