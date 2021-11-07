import { I<%=classify(name)%>} from "./<%=name%>-interface";

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
}
