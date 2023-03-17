import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AbstractDomainApi} from '@tw/shared';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "../models/classes/user.class";

@Injectable()
export class UserApiService extends AbstractDomainApi {

  /**
   * ### getUserByName
   * Path: /pet
   * Method: get
   */
  getUserByName(params: any): Observable<User> {
    const query = new URLSearchParams(<any>params).toString();
    return this.httpClient.get<User>(this.baseUrl + '/pet' + query, {observe: 'body'}).pipe(catchError((err) => {
      return throwError(new Error(err))
    }))
  }


  /**
   * ### addNewUser
   *
   * Path: /pet
   * Method: post
   * Params:
   *
   *  body:  - description: Pet object that needs to be added to the store,
   *
   *  @example ``````
   */
  addNewUser(params: { body:any }): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + '/pet', params, {observe: 'body'}).pipe(catchError((err) => {
      return throwError(new Error(err))
    }))
  }


  constructor(private httpClient: HttpClient ) {
    super(httpClient, '\'petstore.swagger.io/v2/\'');
  }
}
