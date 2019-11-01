import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../app.model';
import {TaskService} from '../todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() id:string;
  @Input() description:string;
  @Input() dueDate:string;

  constructor(private taskService: TaskService) { }

  changeduedate(dueDate){
    this.taskService.updatedueDate(this.id,dueDate);
  }

  deletetask(id){
    this.taskService.deleteTask(id);
  }

  ngOnInit() {
  }

}
