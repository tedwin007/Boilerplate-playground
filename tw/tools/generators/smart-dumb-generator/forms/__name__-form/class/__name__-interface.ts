
<% function renderEntityProps(json) {%>
  <%var keys= Object.keys(json);%>
  <% if (Array.isArray(keys)){%>
    <%keys.forEach( function(prop){%><%-prop%>:<%-json[prop].type%>;%><% }); %>
  <%}%>
<%}%>

export interface I<%=classify(name)%>{
<%-renderEntityProps(json)%>
}
