import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Blog } from '../interfaces/blog';

@Injectable( {
  providedIn: 'root'
} )
export class SEOService {

  constructor( @Inject( DOCUMENT ) private doc: Document, private title: Title, private metaTags: Meta ) { }

  updateTitle( title: string ) {
    this.title.setTitle( title );
  }

  updateMetaTags( metaTags: MetaDefinition[] ) {
    metaTags.forEach( m => this.metaTags.updateTag( m ) );
  }

  createCanonicalLink() {
    let link: HTMLLinkElement = this.doc.createElement( 'link' );
    link.setAttribute( 'rel', 'canonical' );
    this.doc.head.appendChild( link );
    link.setAttribute( 'href', this.doc.URL )
  }

  extractBlogTags( blog: Blog ) {
    this.createCanonicalLink();
    this.updateTitle( blog.title );

    let metaTags: MetaDefinition[] = [
      { property: 'og:title', content: blog.title },
      { property: 'description', content: blog.content.join( ', ' ) },
      { property: 'og:description', content: blog.content.join( ', ' ) },
      { property: 'og:url', content: environment.appUrl + blog.url },
      { property: 'og:image', content: environment.appUrl + blog.image },
    ];
    this.updateMetaTags( metaTags )
  }
}
