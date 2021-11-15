/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from './serviceOptions';
export const basePath = '/v1';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class Product {
  /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
  'product_id'?: string;

  /** Description of product. */
  'description'?: string;

  /** Display name of product. */
  'display_name'?: string;

  /** Capacity of product. For example, 4 people. */
  'capacity'?: string;

  /** Image URL representing the product. */
  'image'?: string;

  constructor(data: undefined | any = {}) {
    this['product_id'] = data['product_id'];
    this['description'] = data['description'];
    this['display_name'] = data['display_name'];
    this['capacity'] = data['capacity'];
    this['image'] = data['image'];
  }

  public static validationModel = {};
}

export class PriceEstimate {
  /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
  'product_id'?: string;

  /** [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. */
  'currency_code'?: string;

  /** Display name of product. */
  'display_name'?: string;

  /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
  'estimate'?: string;

  /** Lower bound of the estimated price. */
  'low_estimate'?: number;

  /** Upper bound of the estimated price. */
  'high_estimate'?: number;

  /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
  'surge_multiplier'?: number;

  constructor(data: undefined | any = {}) {
    this['product_id'] = data['product_id'];
    this['currency_code'] = data['currency_code'];
    this['display_name'] = data['display_name'];
    this['estimate'] = data['estimate'];
    this['low_estimate'] = data['low_estimate'];
    this['high_estimate'] = data['high_estimate'];
    this['surge_multiplier'] = data['surge_multiplier'];
  }

  public static validationModel = {};
}

export class Profile {
  /** First name of the Uber user. */
  'first_name'?: string;

  /** Last name of the Uber user. */
  'last_name'?: string;

  /** Email address of the Uber user */
  'email'?: string;

  /** Image URL of the Uber user. */
  'picture'?: string;

  /** Email address of the Uber user */
  'role'?: string;

  constructor(data: undefined | any = {}) {
    this['first_name'] = data['first_name'];
    this['last_name'] = data['last_name'];
    this['email'] = data['email'];
    this['picture'] = data['picture'];
    this['role'] = data['role'];
  }

  public static validationModel = {};
}

export class Activity {
  /** Unique identifier for the activity */
  'uuid'?: string;

  constructor(data: undefined | any = {}) {
    this['uuid'] = data['uuid'];
  }

  public static validationModel = {};
}

export class Activities {
  /** Position in pagination. */
  'offset'?: number;

  /** Number of items to retrieve (100 max). */
  'limit'?: number;

  /** Total number of items available. */
  'count'?: number;

  /**  */
  'history'?: Activity[];

  constructor(data: undefined | any = {}) {
    this['offset'] = data['offset'];
    this['limit'] = data['limit'];
    this['count'] = data['count'];
    this['history'] = data['history'];
  }

  public static validationModel = {};
}

export class Error {
  /**  */
  'code'?: number;

  /**  */
  'message'?: string;

  /**  */
  'fields'?: string;

  constructor(data: undefined | any = {}) {
    this['code'] = data['code'];
    this['message'] = data['message'];
    this['fields'] = data['fields'];
  }

  public static validationModel = {};
}
