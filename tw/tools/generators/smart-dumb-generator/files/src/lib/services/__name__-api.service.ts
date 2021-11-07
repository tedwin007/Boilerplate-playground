import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../../../apps/boilerplate/src/environments/environment";
import { AbstractDomainApi } from '@tw/shared';
import {APIMethods} from "@tw/shared";

type <%=classify(name)%>Apis = {};

@Injectable()
export class <%=classify(name)%>ApiService extends AbstractDomainApi<<%=classify(name)%>Apis>  {
  config: <%=classify(name)%>Apis;
  call: APIMethods<<%=classify(name)%>Apis>
  constructor(private httpClient: HttpClient) {
    super(httpClient, environment.apiURL);
  }

  protected getApiConfig(): <%=classify(name)%>Apis {
    return {};
  }
}
