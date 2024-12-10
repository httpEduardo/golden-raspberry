import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  yearsWithMultipleWinners = [
    { year: 1986, winCount: 2 },
    { year: 1990, winCount: 2 },
    { year: 2015, winCount: 2 },
  ];

  topStudios = [
    { name: 'Columbia Pictures', winCount: 6 },
    { name: 'Paramount Pictures', winCount: 6 },
    { name: 'Warner Bros.', winCount: 5 },
  ];

  maxProducers = [
    { producer: 'Matthew Vaughn', interval: 13, previousWin: 2002, followingWin: 2015 },
  ];

  minProducers = [
    { producer: 'Joel Silver', interval: 1, previousWin: 1990, followingWin: 1991 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
