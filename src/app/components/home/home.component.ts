import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
} )
export class HomeComponent implements OnInit {
  blogs: Observable<Blog[]>;

  constructor( blogService: BlogService ) {
    this.blogs = blogService.blogs;
  }

  ngOnInit(): void {
  }

}
