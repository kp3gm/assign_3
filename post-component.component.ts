import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent {
  text:string='';
  posts: string[] = [];
  addPost() {
    if (this.text) {
      this.posts.unshift(this.text); // add new post to beginning of array
      this.text = ''; // clear the text area
    }
  }


}
