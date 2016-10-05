/* tslint:disable:no-unused-variable */
import { ToDosComponent } from '../../app/todos/todos.component';
import { ToDo } from '../../app/todos/todo.model';
import { ToDoService } from '../../app/todos/todo.service';

import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Rx';

////////  SPECS  /////////////

describe('ToDosComponent', () => {
  let mockToDoService: MockToDoService;

  beforeEach(async(() => {
    mockToDoService = new MockToDoService();
    TestBed.configureTestingModule({
      providers: [
        ToDosComponent,
        { provide: ToDoService, useClass: MockToDoService }
      ]
    });
  }));

  it('Should add toDos from getToDos field on init', done => {
    let toDosComponent: ToDosComponent;
    getTestBed().compileComponents();

    toDosComponent = getTestBed().get(ToDosComponent);
    expect(toDosComponent).toBeDefined();

    toDosComponent.ngOnInit();
    expect(toDosComponent.toDos[0].text).toEqual('mock');
    expect(toDosComponent.toDos[1].text).toEqual('response');
    done();
  });
});

class MockToDoService {
  getToDos(): Observable<ToDo[]> {
    return Observable.of([
      new ToDo(1, 'mock'),
      new ToDo(2, 'response')
      ]);
  };
}
