import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="Muhammad Hanzla";
  public url=window.location.href;
  public success="bg-success";
  public error=false;
  public multiError={
    "bg-success":this.error,
    "bg-danger":!this.error,
    "bg-isSpecial":this.error
  }
  public multiStyle={
    color:'blue',
    fontStyle:'italic',
    textAlign:'right',
  }
  public greetings="";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
    console.log(event)
      this.greetings="this is a button event"
  }
  public message="";
  logMessage(value: any){
    this.message ="This is a button event";
    console.log(value);
  }
  public fname="";
  public Dnone="true";
  public color="red";
 
}