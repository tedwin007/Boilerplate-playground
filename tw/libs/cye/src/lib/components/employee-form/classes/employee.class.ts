import {BaseEmployee} from "../../../models/interfaces/employee.interface";
import {EmployeeForm} from "./employee-form.class";

export class Employee {
  form: EmployeeForm

  constructor(public initialData?: BaseEmployee) {
    this.form = new EmployeeForm(initialData)
  }

  static generate(): BaseEmployee {
    return {
      companyName: '',
      domain: '',
      numOfEmployees: 0,
    }
  }
}
