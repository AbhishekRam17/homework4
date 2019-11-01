import { TaskService } from "../todo.service";
import { config } from "../app.config";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Task } from "../app.model";
import { AngularFirestore } from "angularfire2/firestore";

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Observable<any[]>;
  constructor(private db: AngularFirestore, private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as Task;

          //Get document id
          const id = a.payload.doc.id;

          //Use spread operator to add the id to the document data
          return { id, ...data };
        });
      }));

    console.log(this.tasks);
  }
  }


