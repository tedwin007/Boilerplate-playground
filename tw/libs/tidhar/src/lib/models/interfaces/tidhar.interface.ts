export interface IProduct {
  product_id: string;
  description: string;
  display_name: string;
  capacity: string;
  image: string;
}

export interface IPriceEstimate {
  product_id: string;
  currency_code: string;
  display_name: string;
  estimate: string;
  low_estimate: number;
  high_estimate: number;
  surge_multiplier: number;
}

export interface IProfile {
  first_name: string;
  last_name: string;
  email: string;
  picture: string;
  role: string;
}

export interface IActivity {
  uuid: string;
}

export interface IActivities {
  offset: number;
  limit: number;
  count: number;
  history: any[];
}

export interface IError {
  code: number;
  message: string;
  fields: string;
}
