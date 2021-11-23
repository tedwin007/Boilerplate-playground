import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { AbstractDomainApi } from '@tw/shared';
import {Observable,throwError} from "rxjs";
import {catchError} from "rxjs/operators";

<%
var paths = swaggerData['paths'];
var pathNameList = Object.keys(swaggerData.paths);

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

<% function buildMethods (current,cb,urlPath){%>
    <%if(!current[cb(current)]){return}%>
      <%var method = cb(current)%>
     <% var pathData= current[method]%>
      <%var successData = pathData?.responses['200']%>
      <%var responseType=successData?.schema?.items?.['$ref'] || successData?.schema?.['$ref'] %>
      <% var methodName = camelize(pathData?.operationId || pathData?.summary || '') %>
      /**
       * ### <%-camelize(methodName)%>
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
       *  @example ```<%= current['example'] %>```
       */
       <%-methodName%>(params:{<%pathData.parameters?.forEach(function(item){ %><%= item.name %>: <%-item.type %>, <%}) %>}):Observable<<%-classify( responseType|| '') || 'any' %>> {
      <%if(method === "get" || method === "delete"){%>const query = new URLSearchParams(<any>params).toString();<%}%>
        return this.httpClient.<%=method%><<%-classify( responseType|| '') || 'any'%>>(this.baseUrl+'<%=urlPath%>'<%if(method === "get" || method === "delete" ){  %>+query <%}%><%if(method!=='get' && method !== "delete"){%>,params<%}%> ,{observe:'body'}).pipe(catchError((err)=>{return throwError(new Error(err))}))
  }
<%} %>

@Injectable()
export class <%=classify(name)%>ApiService extends AbstractDomainApi  {

  <% pathNameList.forEach( function(prop){ %>
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
