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

  header: string;
  displayedColumns: string[] = ['select', 'text'];
  dataSource;
  selection = new SelectionModel<Todo>(true, []);

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Todo): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  ngOnInit(){
    this.header = this.project.title;
    this.dataSource = new MatTableDataSource<Todo>(this.project.todos);
  }

}
