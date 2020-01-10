import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  message :string ="Some random message";
  sent1:string = "Visual studio is a nice ide";
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    alert("inside the function ")
  }

}