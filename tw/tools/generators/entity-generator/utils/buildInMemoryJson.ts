import {EntityProp} from "./models/entity.prop";
import {FormData} from "./models/form.data";

export function buildInMemoryJson(): {} {
    const json = {};
    // props definition
    const props = [
        new EntityProp(
            'name',
            new FormData('name error msg', {}, true),
            'string'
        ),
        new EntityProp(
            'age',
            new FormData('age error msg', {required: null}, false),
            'number'
        )
    ];

    // props union
    props.forEach((item: EntityProp) => {
        Object.assign(json, item.toJson());
    });

    // result
    return json;
}
