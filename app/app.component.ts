import { Component } from '@angular/core';
import { ToDo } from './todo/todo';

@Component({
    selector: 'yatd-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Yet Another To Do App';
    toDo: ToDo = {
        id: 1,
        text: 'Add a backend'
    };
}
