import { Component } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { }
  number = 0;
  totalVotes = 0;
item: any ;
  upVote() {
    if ( this.totalVotes = 1 ) {
     return 0;
      }
     return this.totalVotes++;
    }
    downVote() {
      if ( this.totalVotes = 0 ) {
       return 1;
        }
        this.totalVotes--;
      }
    getCurrencies() {
      return ['USD', 'AUD', 'EUR'];

    }
    greet(name) {
      return 'Welcome ' + name;

    }
    outcomeResult() {
      if (this.number < 0) {
        return 0 ;
      }
      return this.number + 1;
      }
add() {
this.item = [];
this.item.push = name;
}

  }
