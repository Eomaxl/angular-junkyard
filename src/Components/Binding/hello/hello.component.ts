import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name:string;
  @Input() jsonVal:any;
  firstName: string = JSON.stringify(this.jsonVal);
  constructor() { }

  ngOnInit() {
  }

  
  
}