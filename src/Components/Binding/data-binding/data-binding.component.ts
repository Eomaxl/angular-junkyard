import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

message : string ="text from property binding component";
  constructor() { }

  ngOnInit() {
  }

  getMessage()
  {
    console.log(this.message);
    return this.message;
  }

}