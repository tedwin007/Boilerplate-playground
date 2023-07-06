import { FormControl} from "@angular/forms";

export type Nullable<T> = { [k in keyof T]: T[k] | null }
export type EntityFormGroup<T> = { [k in keyof T]: FormControl }
