import {EntityProxy} from "./proxy";
import {GRID, PropType} from "./entity-schema.interface";
import {FormData} from "./form.data";

export class EntityProp {

    constructor(name: string, form: FormData, type: PropType) {
        Object.assign(this, {[name]: {form: {...form}, type}})

    }

    toJson() {
        let parse = JSON.parse(JSON.stringify(this));
        console.log('toJson', parse);
        return parse
    }

    validate() {
        EntityProxy.Create(this.toJson());
    }
}
