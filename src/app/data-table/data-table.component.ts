import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Todo } from '../todo';
import {Project} from "../project";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() project: Project;

  constructor() {}

  displayedColumns: string[] = ['checkList'];
  dataSource;
  selection = new SelectionModel<Todo>(true, []);

  changeValue(todo: Todo){
   todo.isCompleted = !todo.isCompleted;
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<Todo>(this.project.todos);
  }

}
