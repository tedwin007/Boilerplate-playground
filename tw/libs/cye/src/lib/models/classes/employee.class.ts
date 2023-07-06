import {IEmployee} from "../interfaces/employee.interface";

export interface IEmployeeRequest {
  id?: string | number;
}

export type IEmployeeResponse = IEmployee;

export class Employee implements IEmployee {
  public personalInfo?;
  public companyName?: string
  public domain?: string
  public numOfEmployees?: number


  constructor(data: IEmployee) {
    Object.assign(this, data);
  }

}
