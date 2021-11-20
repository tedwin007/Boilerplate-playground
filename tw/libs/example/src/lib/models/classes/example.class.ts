import { ISingle } from '../interfaces/example.interface';

export interface ISingleRequest {}

export interface ISingleResponse {}

/**
 * @example
 * ```js
 *
 * ```
 */
export class Single implements ISingle {
  //
  public id: number;

  constructor(data: ISingle) {
    Object.assign(this, data);
  }
  static toRequestData(data: ISingle): ISingleRequest {
    return {};
  }
  static fromResponseData(data: ISingle): Single {
    return new Single(data);
  }
}
