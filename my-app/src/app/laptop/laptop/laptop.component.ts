import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { 
    console.log("I am calling because somebody clicked on laptop")
  }
  ngOnInit(): void {
  }

}
