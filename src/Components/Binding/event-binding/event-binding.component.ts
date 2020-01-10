import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  team:string="Manchester United";
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    alert("Button was clicked");
  }
  onKeyUp(keyUpEvent)
  {
    
    console.log(keyUpEvent.key);
    if(keyUpEvent.key == 'A')
    {
      console.log("invalid character");
    }
      
    if(keyUpEvent === 'a')
      console.log("invalid character");
  }
}