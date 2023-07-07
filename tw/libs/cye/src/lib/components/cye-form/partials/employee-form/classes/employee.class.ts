import {EmployeeForm} from "./employee-form.class";
import {BaseEmployee} from "../../../../../models/interfaces/employee.interface";
import {HasForm} from "../../../../../models/interfaces/utils-type.type";

export class Employee implements HasForm{
  form: EmployeeForm

  constructor(public initialData: BaseEmployee = Employee.generate()) {
    this.form = new EmployeeForm(initialData )
  }

  static generate(): BaseEmployee {
    return {
      companyName: '',
      domain: '',
      numOfEmployees: null,
    }
  }
}
