import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  template: `
    <div>
      <h2>Comentarios</h2>
      <ul>
    <!--- Código aquí..... -->
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() comments: { author: string; content: string; }[] = [];
}
