import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-decorators';
  i=0;
  workHard(){
    console.log("this function got executed "+this.i++ +"times")
  }
}
