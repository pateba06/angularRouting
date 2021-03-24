import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

  constructor() { 
    console.log("I am calling because somebody clicked on tablet")
  }

  ngOnInit(): void {
  }

}
