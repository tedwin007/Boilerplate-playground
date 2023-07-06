import {IPerson} from "./person.interface";
import {EntityFormGroup} from "./utils-type.type";

export interface BaseEmployee {
  companyName: string;
  domain: string;
  numOfEmployees: number;
}

export type IEmployee = BaseEmployee & IPerson

export type IEmployeeForm = EntityFormGroup<Required<BaseEmployee>>
