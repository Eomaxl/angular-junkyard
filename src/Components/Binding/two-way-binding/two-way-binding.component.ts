import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  @Input() counter :number;
  operation:string;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

   handleButton(operation)
  {
    operation === 'INC' ? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
  }
   
}