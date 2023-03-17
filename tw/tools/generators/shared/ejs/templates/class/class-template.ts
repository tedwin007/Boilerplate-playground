import {I<%=classify(entityName)%>} from "../interfaces/<%=dasherize(entityName)%>.interface";

export interface I<%=classify(entityName)%>Request{

}
export interface I<%=classify(entityName)%>Response{

}

/**
* @example
* ```js
* <%- JSON.stringify(swaggerData['definitions'][entityName]['example'])%>
* ```
*/
export class <%=classify(entityName)%> implements I<%=classify(entityName)%>{
    <%- include(dirPath+'/class/classPropsView',{obj:swaggerData['definitions'][entityName]['properties']}) %>

    constructor(data: I<%=classify(entityName)%>){
      Object.assign(this, data);
    }

    static toRequestData(data:I<%=classify(entityName)%>) :I<%=classify(entityName)%>Request{
      return {
      }
    }

    static fromResponseData(data: I<%=classify(entityName)%>) : <%=classify(entityName)%> {
        return new <%=classify(entityName)%>(data);
    }

  }
