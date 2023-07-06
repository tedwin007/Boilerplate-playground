import {EntityFormGroup, Nullable} from "./utils-type.type";

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}


export type IPersonForm = EntityFormGroup<Nullable<IPerson>>;


