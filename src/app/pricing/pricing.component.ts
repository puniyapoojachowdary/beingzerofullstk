import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
users = {};
count ={};
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d => {
      this.users['arr']= d;
     //alert(this.users.login);
     this.count=this.users.arr.id;
    })
  }

}
