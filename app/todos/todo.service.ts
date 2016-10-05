import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ToDo } from './todo.model';

let todoUrl = 'http://localhost:8080/todos';

@Injectable()
export class ToDoService {

  public http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getToDos(): Observable<ToDo[]> {
    return this.http.get(todoUrl)
      .map((response: Response) => <ToDo[]>response.json());
  }
}
