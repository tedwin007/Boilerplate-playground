import {PersonForm} from "./person-form.class";
import {IPerson} from "../../../../../models/interfaces/person.interface";
import {HasForm} from "../../../../../models/interfaces/utils-type.type";

export class Person implements HasForm {
  form: PersonForm;

  constructor(public initialData: IPerson = Person.generate()) {
    this.form = new PersonForm(initialData)
  }

  static generate(): IPerson {
    return {
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
    }
  }
}
