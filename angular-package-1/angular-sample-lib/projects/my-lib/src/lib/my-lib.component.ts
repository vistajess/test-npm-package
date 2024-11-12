import { Component, Input } from '@angular/core';
import { MySecondLibService } from '@jevi_test/my-second-lib';

@Component({
  selector: 'lib-my-button',
  template: `
    <button [style.background-color]="backgroundColor">
      {{ text }}
    </button>
  `,
  styles: []
})
export class MyLibComponent {
  @Input() text: string = 'Click me';
  @Input() backgroundColor: string = '#007bff';

  constructor(private mySecondLibService: MySecondLibService) {
    this.mySecondLibService.sayHi();
  }
}