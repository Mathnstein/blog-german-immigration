import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { DatabaseReference } from '@angular/fire/compat/database/interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class BlogService {
  dbRef: DatabaseReference;
  blogs: Observable<Blog[]>;
  blogsRef: AngularFireList<Blog>;

  dateFormat = { month: 'long', day: 'numeric', year: 'numeric' };

  constructor( private db: AngularFireDatabase ) {
    this.dbRef = db.database.ref( 'blogs' );
    this.blogsRef = db.list<Blog>( 'blogs', ref => ref.orderByChild( 'publishedOn' ) );
    this.blogs = this.blogsRef.valueChanges();
  }

  checkBlog( page: string, blog?: Blog ): Promise<Blog> {
    return this.dbRef.child( page ).once( "value" ).then( snapshot => {
      if ( !snapshot.exists() ) {
        if ( blog ) {
          this.createBlog( page, blog );
          return blog;
        } else {
          throw ( page + ' not found' );
        }
      } else {
        console.log( page + " found" );
        return snapshot.exportVal() as Blog;
      }
    } );
  }

  getLikes( page: string ): Promise<number> {
    return this.dbRef.child( page ).once( "value" ).then( snapshot => {
      return snapshot.val().likes;
    } );
  }

  addLike( page: string, amount: number ) {
    this.dbRef.child( page ).child( 'likes' ).transaction( val => {
      val = val + amount;
      return val;
    } );
  }

  createBlog( page: string, content: Blog ) {
    if ( content.publishedOn ) {
      content.displayPublished = content.publishedOn.toLocaleString( 'en-US', { month: 'long', day: 'numeric', year: 'numeric' } );
    }
    if ( content.lastEditedOn ) {
      content.displayEdited = content.lastEditedOn.toLocaleString( 'en-US', { month: 'long', day: 'numeric', year: 'numeric' } );
    }
    this.blogsRef.update( page, content )
  }

  deleteBlog( page: string ) {
    this.blogsRef.remove( page );
  }
}
