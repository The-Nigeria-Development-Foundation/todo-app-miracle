import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  trashIcon = faTrashAlt;

  @Input() todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }
}
