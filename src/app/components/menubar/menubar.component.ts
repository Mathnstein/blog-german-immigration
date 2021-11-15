import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component( {
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: [ './menubar.component.sass' ]
} )
export class MenubarComponent implements OnInit {
  blogs: Observable<Blog[]>;
  isMenuCollapsed: boolean = true;

  constructor( private blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs;
  }

}
