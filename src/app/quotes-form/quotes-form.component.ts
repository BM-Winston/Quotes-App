import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
// import {  } from "module";
import { QuoteClass } from "src/app/quote-class";

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  @Output() addquote = new EventEmitter<QuoteClass>();
  quotes!: QuoteClass;

  getQuote(
    name: string,
    description: string,
    author: string,
    // upvote: number,
    // downvote: number,
    // newDate: Date
  ) {
    // this.addquote.emit(this.quotes);
    //  console.log('winston');

    this.quotes = new QuoteClass(name, description, author, 0, 0, new Date());
    this.addquote.emit(this.quotes);
  }

  constructor() {}

  ngOnInit(): void {}
}
