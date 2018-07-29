import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat:Number= 37.6624;
  lng:Number= 121.8747;

  constructor() { }

  ngOnInit() {
  }

}
