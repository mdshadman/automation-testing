import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.css']
})
export class EventemitterComponent implements OnInit {
  totalVotes = 0;
  voteChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

upVote() {
  this.totalVotes++;
  this.voteChanged.emit(this.totalVotes);
}
}
