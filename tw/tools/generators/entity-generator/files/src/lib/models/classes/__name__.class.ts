import {<%Object.keys(swaggerData['definitions']).forEach(function (entityName){%>I<%=classify(entityName)%>, <%})%>} from "../interfaces/<%=name%>.interface"


<% function buildClass(name, obj) {%>
  export interface I<%=classify(name)%>Request{}

  export interface I<%=classify(name)%>Response{}

  /**
   * @example
   * ```js
   * <%- JSON.stringify(swaggerData['definitions'][name]['example'])%>
   * ```
   */
  export class <%=classify(name)%>Class{
    <%- include(dirPath+'/utils',{obj:swaggerData['definitions'][name]['properties']}) %>
    constructor(data: I<%=classify(name)%>){
      Object.assign(this, data);
    }
  static toRequestData(data:I<%=classify(name)%>) :I<%=classify(name)%>Request{
      return {
      }
    }
  static fromResponseData(data: I<%=classify(name)%>) : <%=classify(name)%>Class {
        return new <%=classify(name)%>Class(data);
    }
  }<%}%>
  <%Object.keys(swaggerData['definitions']).forEach(function (entityName){%>
  <%-buildClass(entityName,swaggerData['definitions'][entityName]['properties'])%>
    <%})%>
