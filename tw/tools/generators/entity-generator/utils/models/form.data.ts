import {Form, Validators} from "./entity-schema.interface";

export class FormData implements Form {
    constructor(
        public error: string,
        public validators: Validators,
        public visible: boolean
    ) {
    }
}
