import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ToDosComponent } from './todos/todos.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ToDosComponent ],
  exports: [ AppComponent, ToDosComponent ],
  bootstrap: [ AppComponent, ToDosComponent ]
})
export class AppModule { }
