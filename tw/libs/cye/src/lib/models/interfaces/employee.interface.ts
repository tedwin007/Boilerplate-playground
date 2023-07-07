import {IPerson} from "./person.interface";
import {EntityFormGroup} from "./utils-type.type";

export interface BaseEmployee {
  companyName: string;
  domain: string | string[] | null;
  numOfEmployees: number | null;
}

export type IEmployee = BaseEmployee & IPerson

export type IEmployeeForm = EntityFormGroup<Required<BaseEmployee>>
