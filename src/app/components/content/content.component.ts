import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  caption = 'Seculogix Ltd is the exclusive distributors for the Indian Ocean.';
  constructor() { }

  ngOnInit(): void {
  }

}
