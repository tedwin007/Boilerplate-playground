import {IApiResponse} from "../interfaces/api-response.interface";

export interface IApiResponseRequest{

}
export interface IApiResponseResponse{

}

/**
* @example
* ```js
* 
* ```
*/
export class ApiResponse implements IApiResponse{
    // 
    public code:number// 
    public type:string// 
    public message:string

    constructor(data: IApiResponse){
      Object.assign(this, data);
    }

    static toRequestData(data:IApiResponse) :IApiResponseRequest{
      return {
      }
    }

    static fromResponseData(data: IApiResponse) : ApiResponse {
        return new ApiResponse(data);
    }

  }
