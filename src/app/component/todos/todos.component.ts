import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(todoKey => todoKey.id !== todo.id);
    this.todoService.DeleteTodo(this.todos);
  } 
}
