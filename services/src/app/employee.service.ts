import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private_employeeServise:EmployeeService) { }
  getEmployees(){
    return [
      {'id': 10,'name':'Ali','age':34},
      {'id': 13,'name':'Jhon','age':42},
      {'id': 11,'name':'Doe','age':32},
      {'id': 12,'name':'mathew','age':24}
    ]
  }
}
