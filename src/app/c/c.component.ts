import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <input type="text" (input)="c.emit(data)" [(ngModel)]="data">
  `,
  styles: []
})
export class CComponent {
  @Input() data: string;
  @Output() c = new EventEmitter();
}
