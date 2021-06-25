import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ngSwitch directives
  public color="blue";
  public colors=['blue','green', 'yellow','red','grey'];
  title = 'ng-directive';
  name ="Muhammad Hanzla";
  value=5.23434;
  public d=new Date;
  public person={
    firstname:"Muhammad",
    lastname:"Hanzla"
  }
  public employees =[
    {'name':'Jhon', 'id':'11' },
    {'name':'Doe', 'id':'12' },
    {'name':'Andrew', 'id':'13' },
    {'name':'Mathew', 'id':'14' }
  ]
  public  firstName='Muhammad Hanlza';
}
