import {IPerson} from "../../../models/interfaces/person.interface";
import {PersonForm} from "./person-form.class";

export class Person {
  form: PersonForm;

  constructor(public initialData?: IPerson) {
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
