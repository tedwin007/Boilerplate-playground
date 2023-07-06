export interface IApiResponse<T> {
  code?: number;
  type?: string;
  message?: string;
  data?:T
}
