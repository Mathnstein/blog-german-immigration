import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component( {
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: [ './like-button.component.sass' ]
} )
export class LikeButtonComponent implements OnInit {
  @Input() page: string;
  likes: number;
  faHeart = faHeart;
  clicked: boolean = false;
  color: string;
  fill: string;

  constructor( public blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogService.getLikes( this.page ).then( likes => {
      this.likes = likes
    } )
  }

  likeThis() {
    if ( !this.clicked ) {
      this.blogService.addLike( this.page, 1 );
    } else {
      this.blogService.addLike( this.page, -1 );
    }
    this.blogService.getLikes( this.page ).then( likes => {
      this.likes = likes
    } );
    this.clicked = !this.clicked;
    this.color = this.clicked ? 'red' : 'black';
    this.fill = this.clicked ? 'red' : 'none';
  }

}
