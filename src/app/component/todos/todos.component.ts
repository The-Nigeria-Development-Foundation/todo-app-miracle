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


  //  Deletes todo in localStorage and UI 
  deleteTodo(todo:Todo) {

    //  Deletes todo in UI
    this.todos = this.todos.filter(todoKey => todoKey.id !== todo.id);

    //  Deletes todo in localStorage
    this.todoService.replaceTodos(this.todos);
  } 


  // Adds todo in localStorage and UI 
  addTodo(todo:Todo) {

    //  Adds todo in UI
    this.todos.push(todo);

    //  Adds todo in localStorage
    this.todoService.replaceTodos(this.todos);
  } 
}
