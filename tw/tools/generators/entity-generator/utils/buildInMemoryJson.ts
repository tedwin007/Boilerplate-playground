import {EntityProp} from "./models/entity.prop";
import {FormData} from "./models/form.data";

export function buildInMemoryJson(dataFromJson?: { [k: string]: EntityProp }): { [k: string]: EntityProp } {
  const json = {};

  if (!dataFromJson) {
    // props definition
    const props: EntityProp[] = [
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
  } else {
    // @ts-ignore
    Object.keys(dataFromJson).reduce((accumulator: string, current: string, index: number, original: any[], initialValue: any) => {
      let dataFromJsonElement: any = dataFromJson[current];
      const {form, name, type} = dataFromJsonElement
      let entityProp = new EntityProp(name, new FormData(form.error, form.validators, form?.visible), type);
      Object.assign(initialValue, {[accumulator]: entityProp});
      return initialValue
    }, []);
  }

  // result
  return json;

}
