import { Component, OnInit } from '@angular/core';
import {TaskService} from '../todo.service'
import {Task} from '../app.model'
@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
myTask:Task;
editMode: boolean = false;
taskToEdit: any = {};
  constructor(private taskService: TaskService) { }

  /*submitnow(text:HTMLInputElement, duedate:HTMLInputElement){
    var todo : Task = {id,
      description : text.value,
      dueDate:duedate.value
    }
    this.taskService.addTask(todo);
  }*/

  submit(todoinput:string):void{
    
    if (this.myTask !== null) {
      //Get the input value
      let task = {
        description: this.myTask
      };

      if (!this.editMode) {
        console.log(task);
        this.taskService.addTask(task);
      } else {
        //Get the task id
        let taskId = this.taskToEdit.id;

        //update the task
        this.taskService.updateTask(taskId, task);
      }
  }
  }
  

  ngOnInit() {
  }

}
