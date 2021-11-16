import {
  IProduct,
  IPriceEstimate,
  IProfile,
  IActivity,
  IActivities,
  IError,
} from '../interfaces/store.interface';

export interface IProductRequest {}

export interface IProductResponse {}

/**
 * @example
 * ```js
 * {"image":"image","product_id":"product_id","description":"description","display_name":"display_name","capacity":"capacity"}
 * ```
 */
export class Product implements IProduct {
  // Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
  public product_id: string;

  // Description of product.
  public description: string;

  // Display name of product.
  public display_name: string;

  // Capacity of product. For example, 4 people.
  public capacity: string;

  // Image URL representing the product.
  public image: string;

  constructor(data: IProduct) {
    Object.assign(this, data);
  }
  static toRequestData(data: IProduct): IProductRequest {
    return {};
  }
  static fromResponseData(data: IProduct): Product {
    return new Product(data);
  }
}

export interface IPriceEstimateRequest {}

export interface IPriceEstimateResponse {}

/**
 * @example
 * ```js
 * {"high_estimate":6.027456183070403,"product_id":"product_id","low_estimate":0.8008281904610115,"surge_multiplier":1.4658129805029452,"estimate":"estimate","display_name":"display_name","currency_code":"currency_code"}
 * ```
 */
export class PriceEstimate implements IPriceEstimate {
  // Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles
  public product_id: string;

  // [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
  public currency_code: string;

  // Display name of product.
  public display_name: string;

  // Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.
  public estimate: string;

  // Lower bound of the estimated price.
  public low_estimate: number;

  // Upper bound of the estimated price.
  public high_estimate: number;

  // Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.
  public surge_multiplier: number;

  constructor(data: IPriceEstimate) {
    Object.assign(this, data);
  }
  static toRequestData(data: IPriceEstimate): IPriceEstimateRequest {
    return {};
  }
  static fromResponseData(data: IPriceEstimate): PriceEstimate {
    return new PriceEstimate(data);
  }
}

export interface IProfileRequest {}

export interface IProfileResponse {}

/**
 * @example
 * ```js
 * {"last_name":"last_name","first_name":"first_name","email":"email","picture":"picture"}
 * ```
 */
export class Profile implements IProfile {
  // First name of the Uber user.
  public first_name: string;

  // Last name of the Uber user.
  public last_name: string;

  // Email address of the Uber user
  public email: string;

  // Image URL of the Uber user.
  public picture: string;

  // Email address of the Uber user
  public role: string;

  constructor(data: IProfile) {
    Object.assign(this, data);
  }
  static toRequestData(data: IProfile): IProfileRequest {
    return {};
  }
  static fromResponseData(data: IProfile): Profile {
    return new Profile(data);
  }
}

export interface IActivityRequest {}

export interface IActivityResponse {}

/**
 * @example
 * ```js
 * {"uuid":"uuid"}
 * ```
 */
export class Activity implements IActivity {
  // Unique identifier for the activity
  public uuid: string;

  constructor(data: IActivity) {
    Object.assign(this, data);
  }
  static toRequestData(data: IActivity): IActivityRequest {
    return {};
  }
  static fromResponseData(data: IActivity): Activity {
    return new Activity(data);
  }
}

export interface IActivitiesRequest {}

export interface IActivitiesResponse {}

/**
 * @example
 * ```js
 * {"offset":0,"limit":6,"count":1,"history":[{"uuid":"uuid"},{"uuid":"uuid"}]}
 * ```
 */
export class Activities implements IActivities {
  // Position in pagination.
  public offset: number;

  // Number of items to retrieve (100 max).
  public limit: number;

  // Total number of items available.
  public count: number;

  //
  public history: any[];

  constructor(data: IActivities) {
    Object.assign(this, data);
  }
  static toRequestData(data: IActivities): IActivitiesRequest {
    return {};
  }
  static fromResponseData(data: IActivities): Activities {
    return new Activities(data);
  }
}

export interface IErrorRequest {}

export interface IErrorResponse {}

/**
 * @example
 * ```js
 *
 * ```
 */
export class Error implements IError {
  //
  public code: number;

  //
  public message: string;

  //
  public fields: string;

  constructor(data: IError) {
    Object.assign(this, data);
  }
  static toRequestData(data: IError): IErrorRequest {
    return {};
  }
  static fromResponseData(data: IError): Error {
    return new Error(data);
  }
}
