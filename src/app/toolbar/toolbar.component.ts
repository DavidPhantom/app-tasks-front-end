import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() newDisplayEvent = new EventEmitter<boolean>();

  display = false;

  openReactiveForm(){
    this.display = true;
    this.newDisplayEvent.emit(this.display);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
