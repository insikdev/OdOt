import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];
  constructor(private toDoService: TodoService) {}

  handleChange(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.toDoService.addTodo(value);
  }

  ngOnInit(): void {
    this.toDoService.getAllToDos().subscribe((next) => {
      this.todos = next;
    });
  }
}
