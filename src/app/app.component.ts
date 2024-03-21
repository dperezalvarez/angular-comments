import { Component } from '@angular/core';

interface Comment {
  author: string;
  content: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="App">
      <h1>Deja tu Comentario</h1>
      <app-comment-form (commentSubmit)="addComment($event)"></app-comment-form>
      <app-comment-list [comments]="comments"></app-comment-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  comments: Comment[] = [];

  addComment(newComment: Comment): void {
    //Añadir código
  }
}

