import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular';
  counter = 0;
  classToSet ='positive';
  json = {"fName":"Sourav","lName":"Mansingh"};


  onCounterChange(buttonType:string)
  {
    buttonType === 'INC' ? this.counter++ :this.counter--;
    this.classToSet = this.counter >= 0 ? 'positive': 'negative';
  }
}
