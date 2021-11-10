import { I<%=classify(name)%> } from "../interfaces/<%=name%>.interface";
import { I<%=classify(name)%>Request } from "../interfaces/<%=name%>-request.interface";
import { I<%=classify(name)%>Response } from "../interfaces/<%=name%>-response.interface";

<% function renderEntityProps(json) {%>
  <%var keys= Object.keys(json);%>
  <% if (Array.isArray(keys)){%>
    <%keys.forEach( function(prop){%>public <%-prop%>:<%-json[prop].type%>;%><% }) %>
  <%}%>
<%}%>

export class <%=classify(name)%>Class{
  <%-renderEntityProps(json)%>
    constructor(data: I<%=classify(name)%>){
      Object.assign(this, data);
  }

  static toRequestData(data:I<%=classify(name)%>) :I<%=classify(name)%>Request{
    return {
      <%var keys= Object.keys(json);%>
    <% if (Array.isArray(keys)){%>
      <%keys.forEach( function(prop){%><%-prop%>:data.<%- prop %>, <% }) %>
      <%}%>
    }
  }

  static fromResponseData(data: I<%=classify(name)%>Response) : I<%=classify(name)%> {
    return new <%=classify(name)%>Class(data);
  }

}
