import { Component } from '@angular/core';

@Component({
  selector: 'test-app',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  constructor() {
  }
  compute(number) {
    if (number < 0) {
      return 0 ;
    }
    return number + 1;
  }
  getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  
  }
  greet(name) {
    return 'Welcome ' + name;
  
  }
}
