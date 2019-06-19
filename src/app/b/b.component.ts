import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    C: <app-c [data]="data" (c)="b.emit($event)"></app-c>
  `,
  styles: []
})
export class BComponent {
  @Input() data: string;
  @Output() b = new EventEmitter();
}
