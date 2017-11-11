import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoService } from './todos/todo.service';
import { TodoListComponent } from './todos/todo.list.component';

@NgModule({
  declarations: [
    AppComponent, TodoListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    NgbModule.forRoot(), RouterModule.forRoot([
      {
        path: 'todoList',
        component: TodoListComponent
      }, {
        path: '',
        redirectTo: '/todoList',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
