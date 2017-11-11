import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { TodoItem } from './todo.item';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoService {

    private baseurl = 'https://emirates-tests-todo.herokuapp.com';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
    }

    getTodoList(): Promise<TodoItem[]> {
        return this.http.get(this.baseurl + '/todo/list')
            .toPromise().then(resp => resp.json() as TodoItem[])
            .catch(e => console.log(e));
    }

    saveTodoItem(item: TodoItem): Observable<Response> {
        return this.http.post(this.baseurl + '/todo/create', JSON.stringify(item), { headers: this.headers });
    }

    deleteTodoItem(item: TodoItem): Observable<Response> {
        return this.http.get(this.baseurl + '/todo/delete?todoId=' + item.todoId);
    }
}