import {AbstractColDef, ColDef} from "ag-grid-community";
import {Type} from "@angular/core";

export interface entity {
  [name: string]: Name;
}

export interface Name {
  type: string;
  form: Form;
}

export interface Form {
  visible: boolean;
  error: string;
  validators: Validators;
}

export interface GRID extends AbstractColDef {
  useColAutoSize?: boolean;
  columns:ColDef[],
  // ag-grid components
  frameworkComponents?: { [k: string]: Type<any> }
}

export interface Validators {
  max?: number;
  min?: number;
  required?: null;
  requiredTrue?: null;
  email?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export type PropType = 'string' | 'number' | 'null' | null | "object";

export interface GridView {
  grid?: GRID;
}

