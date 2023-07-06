import {IPerson} from "./person.interface";

export interface IEmployee extends IPerson{
  companyName?: string;
  domain?: string;
  numOfEmployees?: number;
}
