import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
  }


