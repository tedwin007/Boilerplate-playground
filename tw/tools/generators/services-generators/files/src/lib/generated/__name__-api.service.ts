import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { AbstractDomainApi } from '@tw/shared';
import {IRequestResponse} from "./serviceOptions";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

<%
var paths = swaggerData['paths'];
var allPathes = Object.keys(swaggerData.paths);

function isGetHttpMethod(current){
  return Object.keys(current).find(function(item){return item ==='get'});
}

function isPostHttpMethod(current){
  return Object.keys(current).find(function(item){return item ==='post'});
}

function isPutHttpMethod(current){
  return Object.keys(current).find(function(item){return item ==='put'});
}

function isDeleteHttpMethod(current){
  return Object.keys(current).find(function(item){return item ==='delete'});
}
%>

<% function buildMethods (current,cb,urlPath){ if(!current[cb(current)]){return}%>
      /**
       * ###  <%=classify(cb(current)+current[ cb(current)]['tags']) %>
       * <%- current['description'] %>
       *
       * Path: <%-urlPath%>
       *
       * Method: <%-cb(current) %>
       *
       * Params:
       *  <% current[ cb(current)]['parameters']?.forEach(function(item){ %>
       *  <%= item["name"] %>: <%-item['type'] %> - description: <%-item['description'] %>,
       *
       *
       *  <%})%>
       *
       *  @example ``` <%= current['example'] %>```
       *
       */
       <%-cb(current)%><%-current[ cb(current)]['summary'].replace(new RegExp(' ','gm'),'')%>(params:{<% current[ cb(current)]['parameters']?.forEach(function(item){ %><%= item["name"] %>: <%-item['type'] %>, <%}) %>}):Observable<IRequestResponse<any>> {
      <%if(cb(current) === "get" || cb(current) === "delete"){%>const query = new URLSearchParams(<any>params).toString();<%}%>
        return this.httpClient.<%=cb(current)%><IRequestResponse<any>>(this.baseUrl+'<%=urlPath%>'<%if(cb(current) === "get" || cb(current) === "delete" ){  %>+query <%}%><%if(cb(current) !=='get' && cb(current) !== "delete"){%>,params<%}%> ,{observe:'body'}).pipe(catchError((err)=>{return throwError(new Error(err))}))
  }
<%} %>

@Injectable()
export class <%=classify(name)%>ApiService extends AbstractDomainApi  {

  <% allPathes.forEach( function(prop){ %>
    <% var current = paths[prop] %>
      <%- buildMethods(current,isGetHttpMethod,prop)%>
      <%- buildMethods(current,isPutHttpMethod,prop)%>
      <%- buildMethods(current,isPostHttpMethod,prop)%>
      <%- buildMethods(current,isDeleteHttpMethod,prop)%>
      <%})%>

  constructor(private httpClient: HttpClient,apiURL = '<%-swaggerData.host%><%-swaggerData.basePath%>/' ) {
    super(httpClient,apiURL);
  }
}
