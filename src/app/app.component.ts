import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = false;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  onChange($event) {
    console.log($event);
    this.isChecked = !this.isChecked;
  }

  logSelectedItem($event) {
    console.log($event);
  }

  logInput(jelo) {
    console.log(jelo);
  }
}
