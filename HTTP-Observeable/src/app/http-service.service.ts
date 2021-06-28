import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPServiceService {

  getEmployee(){
    return[
      {"id":1,"name":"Andrew","age":34},
      {"id":2,"name":"Jhon","age":24},
      {"id":3,"name":"Mathew","age":31},
      {"id":6,"name":"Elena","age":37}
    ]
  }
  constructor() { }
}
