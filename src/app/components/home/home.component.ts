import { Component, OnInit } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';
import { SEOService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
} )
export class HomeComponent implements OnInit {
  blogs: Observable<Blog[]>;

  title = 'Coming to Germany...'

  metaTags: MetaDefinition[] = [
    { property: 'og:title', content: this.title },
    { property: 'description', content: 'A resource hub to immigration from someone who just did it.' },
    { property: 'og:description', content: 'A resource hub to immigration from someone who just did it.' },
    { property: 'og:url', content: environment.appUrl },
    { property: 'og:image', content: environment.appUrl + 'German-Flag.jpg' },
  ]

  constructor( private blogService: BlogService, private seoService: SEOService ) {
  }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs;

    this.seoService.createCanonicalLink();
    this.seoService.updateTitle( this.title );
    this.seoService.updateMetaTags( this.metaTags )
  }

}
