// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class EntityProxy {
  public readonly name: NameProxy;
  public static Parse(d: string): EntityProxy {
    return EntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.name = NameProxy.Create(d.name, field);
    return new EntityProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
  }
}

export class NameProxy {
  public readonly type: 'string' | 'number' | 'null' | null | "object";
  public readonly form: FormProxy;
  public static Parse(d: string): NameProxy {
    return NameProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): NameProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.type, false, field + '.type');
    d.form = FormProxy.Create(d.form, field + '.form');
    return new NameProxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.form = d.form;
  }
}

export class FormProxy {
  public readonly visible: boolean;
  public readonly error: string;
  public readonly validators: ValidatorsProxy;
  public static Parse(d: string): FormProxy {
    return FormProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): FormProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkBoolean(d.visible, false, field + '.visible');
    checkString(d.error, false, field + '.error');
    d.validators = ValidatorsProxy.Create(d.validators, field + '.validators');
    return new FormProxy(d);
  }
  private constructor(d: any) {
    this.visible = d.visible;
    this.error = d.error;
    this.validators = d.validators;
  }
}

export class ValidatorsProxy {
  public readonly max?: number;
  public readonly min?: number;
  public readonly required?: null;
  public readonly requiredTrue?: null;
  public readonly email?: string;
  public readonly minLength?: number;
  public readonly maxLength?: number;
  public readonly pattern?: string;
  public static Parse(d: string): ValidatorsProxy {
    return ValidatorsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ValidatorsProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.max, true, field + '.max');
    checkNumber(d.min, true, field + '.min');
    checkNull(d.required, field + '.required');
    if (d.required === undefined) {
      d.required = null;
    }
    checkNull(d.requiredTrue, field + '.requiredTrue');
    if (d.requiredTrue === undefined) {
      d.requiredTrue = null;
    }

    checkString(d.email, true, field + '.email');
    checkNumber(d.minLength, true, field + '.minLength');
    checkNumber(d.maxLength, true, field + '.maxLength');
    checkString(d.pattern, true, field + '.pattern');
    return new ValidatorsProxy(d);
  }
  private constructor(d: any) {
    this.max = d?.max;
    this.min = d?.min;
    this.required = d?.required;
    this.requiredTrue = d?.requiredTrue;
    this.email = d?.email;
    this.minLength = d?.minLength;
    this.maxLength = d?.maxLength;
    this.pattern = d?.pattern;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, 'non-nullable object', false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable);
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'number' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'number', nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'boolean' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'boolean', nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'string' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'string', nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, 'null or undefined', false);
  }
}
function errorHelper(
  field: string,
  d: any,
  type: string,
  nullable: boolean
): never {
  if (nullable) {
    type += ', null, or undefined';
  }
  throw new TypeError(
    'Expected ' +
    type +
    ' at ' +
    field +
    ' but found:\n' +
    JSON.stringify(d) +
    '\n\nFull object:\n' +
    JSON.stringify(obj)
  );
}
