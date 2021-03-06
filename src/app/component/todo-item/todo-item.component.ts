import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
  
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void { }

  //  Declares variable for fontawesome trashAlt icon
    trashIcon = faTrashAlt;


  //  Sets classes dynamically
  setClasses(): any {
    return {
      'todo-item': true,
      iscomplete: this.todo.completed
    }
  }


  //  Toggles todo completed value
  handleChange(todo): void {

    //  Toggles todo completed value in UI
    todo.completed = !todo.completed;

    //  Toggles todo completed value in localStorage
    this.todoService.toggleCompleted(todo);
  }


  //  Deletes todo in localStorage and UI 
  handleClick(todo): void {
    this.deleteTodo.emit(todo);
  }
}
