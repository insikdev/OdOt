import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from '../todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: ToDo[] = [];
  private todosSubject = new Subject<ToDo[]>();

  getAllToDos() {
    return this.todosSubject;
  }

  addTodo(content: string) {
    const id = crypto.randomUUID();
    const item: ToDo = { content, isFinished: false, id };
    this.todos = [...this.todos, item];
    this.update();
  }

  private update() {
    this.todosSubject.next(this.todos);
  }
}
