/* tslint:disable:no-unused-variable */
import { ToDoService } from '../../app/todo/todo.service';
import { ToDo } from '../../app/todo/todo';

import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, XHRBackend, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { By } from '@angular/platform-browser';

////////  SPECS  /////////////

describe('TodoService', () => {
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ToDoService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('Should return a list of todos', done => {
    let toDoService: ToDoService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                {
                  id: 1,
                  text: 'Add backend'
                },
                {
                  id: 2,
                  text: 'Write better tests'
                },
                {
                  id: 3,
                  text: 'Aidan is a jerk'
                }
              ]
            })
          ));
        }
      );

      toDoService = getTestBed().get(ToDoService);
      expect(toDoService).toBeDefined();

      toDoService.getToDos().subscribe((todos: ToDo[]) => {
        expect(todos.length).toBeDefined();
        expect(todos.length).toEqual(3);
        expect(todos[2].text).toEqual('Aidan is a jerk');
        done();
      });
    });
  });
});

