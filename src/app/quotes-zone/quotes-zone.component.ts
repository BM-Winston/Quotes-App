import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-zone',
  templateUrl: './quotes-zone.component.html',
  styleUrls: ['./quotes-zone.component.css']
})
export class QuotesZoneComponent implements OnInit {

  quotes: Quote[] =[
    new Quote{'1'}
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
