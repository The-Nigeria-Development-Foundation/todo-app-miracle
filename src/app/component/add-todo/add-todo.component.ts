import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  //  Sets classes for component dynamically
  setClasses(): any {
    return {
      isactive: this.title ? true : false
    }
  }

  handleSubmit(): void {

    if (this.title.trim().length) {
      const todo = {
        id: Math.random() * 100,
        title: this.title,
        completed: false
      };

      this.addTodo.emit(todo);
    }
    
    this.title = '';
  }
}
