import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  NavBarMsg: string = "Single Page App";
  Home: string ="Home";
  constructor() { }

  ngOnInit() {
  }

  onClickHome(Home)
  {
    alert(`button was clicked`);
  }

}