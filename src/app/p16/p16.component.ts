import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-p16',
  templateUrl: './p16.component.html',
  styleUrls: ['./p16.component.css']
})
export class P16Component {
  employees: any[];

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }
}
