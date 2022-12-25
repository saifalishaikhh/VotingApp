import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.css'],
})
export class VotingPageComponent implements OnInit {
  constructor(private user: UserService) {}

  ngOnInit(): void {}

  vote(data: any) {
    this.user.saveVote(data);
    console.log(data);
  }
}
