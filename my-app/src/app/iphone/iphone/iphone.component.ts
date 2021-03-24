import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  constructor() { 
    console.log("I am calling because somebody clicked on Iphone")
  }
  ngOnInit(): void {
  }

}
