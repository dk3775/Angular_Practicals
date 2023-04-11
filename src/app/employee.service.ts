import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },
    { id: 3, name: 'Bob Williams', position: 'Manager' }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}

interface Employee {
  id: number;
  name: string;
  position: string;
}
