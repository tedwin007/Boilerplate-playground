export interface I<%=classify(entityName)%>{
    <%Object.entries(properties).forEach(function ([k,v]){%><%if(k && v && v['type']){%><%-k%>?:<%-v['type'] === 'integer' ? 'number' :v['type']=== 'array'? 'any[]':v['type'] %> ;<%}%><%})%>
}
