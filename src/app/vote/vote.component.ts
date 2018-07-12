import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  constructor() { }

totalVotes = 0;
upVote() {
  this.totalVotes++;
}
 downVote() {
   this.totalVotes--;
 }
}
