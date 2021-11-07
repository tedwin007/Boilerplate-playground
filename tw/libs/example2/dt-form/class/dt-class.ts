import { IDt } from './dt-interface';

export class DtClass {
  public id: number;
  public name: string;

  constructor(data: IDt) {
    Object.assign(this, data);
  }
}
