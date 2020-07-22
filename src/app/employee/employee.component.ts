import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  eno:number;
  ename:string;
  employeesList:Array<{eno:number, ename:string}>;

  constructor() { 
    this.employeesList = new Array()
  }

  ngOnInit() {
  }
  saveHandler():void{
    this.employeesList.push({"eno":this.eno, "ename":this.ename})
    this.eno =null;
    this.ename = null;
    
    console.log("from saveHandler");
    
  }

}
