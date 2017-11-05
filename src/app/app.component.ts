import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

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

  categories = [
    {name: 'Beginner' },
    {name: 'Intermediate' },
    {name: 'Advanced' }
  ];

  // spinner
  progress = 0;
  timer;
  isLoading = false;
   constructor() {
     this.timer = setInterval( () => {
       this.progress++;
       if (this.progress === 100) {
         clearInterval(this.timer);
        }
      }, 100);

      // observable je bolje pisati unutar OnInit-a
      this.isLoading = true;
      this.longTask().
      subscribe(() => this.isLoading = false);
  }

  longTask() {
    return Observable.timer(5000);
  }

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

  categorySelected(category) {
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);
    category.selected = !category.selected; // tu ne moras ovako: category['selected'] = !category['selected'];
  }
}
