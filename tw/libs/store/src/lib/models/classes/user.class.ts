import {IUser} from "../interfaces/user.interface";

export interface IUserRequest{

}
export interface IUserResponse{

}

/**
* @example
* ```js
* 
* ```
*/
export class User implements IUser{
    // 
    public autoJoin:boolean// 
    public moderator:boolean// 
    public anyFlagUp:boolean// 
    public index:number// 
    public userName:string// 
    public userGuid:string// 
    public versionGUID:string// 
    public mandatory:string// 
    public guid:string// 
    public dailyReminder:string// 
    public userRole:boolean// 
    public email:string// pet status in the store
    public status:string

    constructor(data: IUser){
      Object.assign(this, data);
    }

    static toRequestData(data:IUser) :IUserRequest{
      return {
      }
    }

    static fromResponseData(data: IUser) : User {
        return new User(data);
    }

  }
