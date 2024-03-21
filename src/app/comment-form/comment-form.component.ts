import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  template: `
    <form (submit)="handleSubmit($event)">
      <input [(ngModel)]="author" name="author" placeholder="Tu nombre" />
      <textarea [(ngModel)]="content" name="content" placeholder="Tu comentario"></textarea>
      <button type="submit">Enviar</button>
    </form>
  `,
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  @Output() commentSubmit = new EventEmitter<{ author: string; content: string; }>();
  author: string = '';
  content: string = '';

  handleSubmit(event: Event) {
    //Código aquí
    this.commentSubmit.emit({ author: this.author, content: this.content });
    //Código aquí
  }
}
