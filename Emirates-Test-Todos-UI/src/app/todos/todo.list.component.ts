import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoItem} from './todo.item';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.list.component.html'
})
export class TodoListComponent implements OnInit {

  todoListItem: TodoItem[] = [];

  newTodo: TodoItem = new TodoItem();

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {

    this.todoService.getTodoList().then(todoList => this.todoListItem = todoList);
  }

  onDelete(item: TodoItem): void {
    console.log('In delete ', item);
  }

  onSaveTodo(): void {
    console.log("In save ", this.newTodo);
    this.todoService.saveTodoItem(this.newTodo).subscribe(
      resp => {console.log(resp);}
    );
  }

  refreshList(): void {
    this.todoService.getTodoList().then(todoList => this.todoListItem = todoList);
  }
}
