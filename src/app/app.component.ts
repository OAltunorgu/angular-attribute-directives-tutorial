import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-directives-app';
  status: boolean = false;
  switchValue: number = 0;

  items: { id: number; name: string; value: string }[] = [
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    { id: 3, name: 'Item 3', value: 'Value 3' },
    { id: 4, name: 'Item 4', value: 'Value 4' },
    { id: 5, name: 'Item 5', value: 'Value 5' },
  ];

  changeStatus() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  changeSwitch() {
    if (this.switchValue == 1) {
      this.switchValue = 2;
    } else if (this.switchValue == 2) {
      this.switchValue = 0;
    } else if (this.switchValue == 0) {
      this.switchValue = 1;
    }
  }
}
