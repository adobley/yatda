import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ToDo } from './todo';

let todoUrl = '/api/todos';

@Injectable()
export class ToDoService {

  constructor(private http: Http) {
  }

  getToDos(): Observable<any> {
    return this.http.get(todoUrl)
      .map((response: Response) => <ToDo[]>response.json());
  }
}
