import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  //  Gets todos from localStoragae
  getTodos():Todo[] {
    let todos = [
      {
        title: 'Do stuff',
        id: 1, 
        completed: false
      },
      {
        title: 'Do lots of stuff',
        id: 2, 
        completed: true
      }
    ];
    localStorage.setItem('todo-app', JSON.stringify(todos));
    //localStorage.clear();
    return JSON.parse(localStorage.getItem('todo-app') || '[]')
  }


  //  Toggles specific todo completed value in localStorage
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
