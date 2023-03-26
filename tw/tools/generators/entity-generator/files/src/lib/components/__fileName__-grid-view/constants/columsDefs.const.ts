import {ColDef} from "ag-grid-community";

<%var obj = swaggerData['definitions']; %>
<%var keys = Object.keys(obj); %>

<% keys.forEach(function (entity) { %>
    export const <%=classify(entity)%>sColumnDefs: ColDef[] = [
            <% Object.keys(obj[entity]['properties']).forEach(function (propName) { %>
                { field: '<%=propName%>' },
                <% }) %>
        ]
        <% }) %>
