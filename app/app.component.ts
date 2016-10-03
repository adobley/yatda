import { Component } from '@angular/core';
import { ToDo } from './todo/todo';

@Component({
    selector: 'yatd-app',
    template: `
    <h1>{{title}}</h1>
    <div id="todos">
        <label><input type="checkbox"></label> {{toDo.text}}
    </div>
    `
})
export class AppComponent {
    title = 'Yet Another To Do App';
    toDo: ToDo = {
        id: 1,
        text: 'Add a backend'
    };
}
