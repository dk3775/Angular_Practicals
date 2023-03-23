import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p12',
  templateUrl: './p12.component.html',
  styleUrls: ['./p12.component.css']
})
export class P12Component {
  @Input() todo: string = "Cook Some SpaceCake !";

  todos: Todo[] = [];
  addTodo() {
    console.log(this.todo);
    console.log(this.todos);
    this.todos.push(new Todo({'title': this.todo, 'completed': false}));
  }
}
class Todo {
  title: string = '';
  completed: boolean = false;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}