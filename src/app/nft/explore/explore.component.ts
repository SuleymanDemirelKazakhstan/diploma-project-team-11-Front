import { Component, OnInit } from '@angular/core';
import { Card, test } from '../components/card/test';

@Component({
  selector: 'nft-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  cards: Card[] = test;
  constructor() {}

  ngOnInit() {}
}
