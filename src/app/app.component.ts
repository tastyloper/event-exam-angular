import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-a [data]="data" (a)="data=$event"></app-a>
    <app-b [data]="data" (b)="data=$event"></app-b>
  `,
  styles: []
})
export class AppComponent {
  data = '';
}
