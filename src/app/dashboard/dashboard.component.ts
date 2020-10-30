import {Component, OnInit} from '@angular/core';
import {Project} from "../project";
import {PROJECTS_DATA} from "../projects"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: Project[];

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
   this.projects = PROJECTS_DATA;
  }
}
