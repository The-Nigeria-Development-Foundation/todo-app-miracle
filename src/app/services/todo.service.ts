import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})


//  Manages all localStorage operations
export class TodoService { 

  constructor() { }


  //  Gets todos from localStorage
  getTodos():Todo[] {
    return JSON.parse(localStorage.getItem('todo-app') || '[]')
  }


  
  //  Adds or Deletes specific todo in localStorage by replacing with new todos
  replaceTodos(todos):void {
    localStorage.setItem('todo-app', JSON.stringify(todos));
  }



  //  Toggles specific todo completed property in localStorage
  toggleCompleted(todo):void {

    //  Retrieves todos Array from localStorage
    let todos = JSON.parse(localStorage.getItem('todo-app') || '[]');

    //  Sets todo Array in localStorage to new todos with the toggled value
    todos.map((todoKey) => {

      if (todo.id === todoKey.id) {
        
        todoKey.completed = !todoKey.completed;
        localStorage.setItem('todo-app', JSON.stringify(todos));
      }
    })
  }
}
