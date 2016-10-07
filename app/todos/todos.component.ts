import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
import { ToDoService } from './todo.service';

@Component({
  selector: 'todos',
  template: `
      <input id="new-todo" placeholder="New To Do" />
      <button id="add-todo">Add</button>
      <ul>
        <li *ngFor="let toDo of toDos">
          <label><input type="checkbox"></label> {{toDo.text}}
        </li>
      </ul>
    `,
  providers: [ ToDoService ]
})
export class ToDosComponent implements OnInit {

  toDos: ToDo[] = [ ] ;

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.getToDos()
      .subscribe((toDos: ToDo[]) => this.toDos = toDos);
  }
}
