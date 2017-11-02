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

  // javascrip mjesece racuna od 0 do 11
  minDate = new Date(2017, 0, 1); // prvi januar
  maxDate = new Date(2017, 11, 31); // 31 decembar

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
