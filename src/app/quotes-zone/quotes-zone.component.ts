import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-zone',
  templateUrl: './quotes-zone.component.html',
  styleUrls: ['./quotes-zone.component.css']
})
export class QuotesZoneComponent implements OnInit {

  quotes: Quote[] =[
    new Quote(1,'first quote', 0, 0),
    new Quote(2,'second quote', 0, 0),
    new Quote(3,'third quote', 0, 0),
    new Quote(4,'fourth quote', 0, 0)
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
