import {I<%=classify(entityName)%>} from "../interfaces/<%=dasherize(entityName)%>.interface";

export interface I<%=classify(entityName)%>Request{
 id?: string | number;
}

export type I<%=classify(entityName)%>Response = I<%=classify(entityName)%>;

export class <%=classify(entityName)%> implements I<%=classify(entityName)%>{
    <%- include(dirPath+'/class/classPropsView',{obj:swaggerData['definitions'][entityName]['properties']}) %>

    constructor(data: I<%=classify(entityName)%>){
      Object.assign(this, data);
    }

    static toRequestData(data:{id?:string | number}) :I<%=classify(entityName)%>Request | null{
      return data?.id ? {id:data?.id} : null
    }

    static fromResponseData(data: I<%=classify(entityName)%>) : <%=classify(entityName)%> {
        return new <%=classify(entityName)%>(data);
    }
  }
