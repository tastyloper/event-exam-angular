import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    A: <input type="text" (input)="a.emit(data)" [(ngModel)]="data">
  `,
  styles: []
})
export class AComponent {
  @Input() data: string;
  @Output() a = new EventEmitter();
}
