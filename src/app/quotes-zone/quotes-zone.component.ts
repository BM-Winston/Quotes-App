import { Component, OnInit, Input } from '@angular/core';
// import { Quote } from '../quote';
// import { QuoteClass } from '../quote-class';
import { QuoteClass } from 'src/app/quote-class';



@Component({
  selector: 'app-quotes-zone',
  templateUrl: './quotes-zone.component.html',
  styleUrls: ['./quotes-zone.component.css'],
})
export class QuotesZoneComponent implements OnInit {
  // @Input() quote!: QuoteClass;
  upvotes(index: number) {
    console.log('get');
    this.quotes[index].upvote += 1;
    console.log('winston');
  }
  downvote(index: number) {
    this.quotes[index].downvote += 1;
  }
  //  constructor(public creator: string, public quote: string, public Author: string, public upvote:number, public downvote:number, public newDate:Date ){

  quotes: QuoteClass[] = [
    new QuoteClass('winston', 'quote', 'author', 0, 0, new Date()),
    new QuoteClass('winston', 'quote', 'author', 0, 0, new Date()),
    new QuoteClass('winston', 'quote', 'author', 0, 0, new Date()),
    new QuoteClass('winston', 'quote', 'author', 0, 0, new Date()),
  ];

  constructor() {}

  ngOnInit(): void {}
}
