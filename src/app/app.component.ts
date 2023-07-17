import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  size = 'large';
  color = 'primary';

  changeButtonSize(size: string): void {
    this.size = size;
  }
  changeButtonColor(color: string): void {
    this.color = color;
  }
}
