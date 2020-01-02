import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:string = "RANDOM DATA";
  y:number = 20;
  z:boolean = true;
  constructor() { }

  ngOnInit() {
    this.x = this.x +"  new";
  }

}
