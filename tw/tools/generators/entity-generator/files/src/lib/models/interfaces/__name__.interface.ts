
<% function renderEntityProps(json) {%>
  <%var keys= Object.keys(json);%>
  <% if (Array.isArray(keys)){%>
    <%keys.forEach( function(prop){%><%-prop%>:<%-json[prop].type%>;%><% }); %>
  <%}%>
<%}%>

<%Object.keys(swaggerData['definitions']).forEach(function (entityName){%>
  export interface I<%=classify(entityName)%>{
  <%var props= swaggerData['definitions'][entityName]['properties'];%><%if(props){%><%Object.entries(props).forEach(function ([k,v]){%><%if(k && v){%><%-k%>:<%-v['type'] === 'integer' ? 'number' :v['type']=== 'array'? 'any[]':v['type'] %> ;<%}%><%})%>}<%}%>
  <%})%>
