import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { AbstractDomainApi } from '@tw/shared';
import {APIMethods} from "@tw/shared";

type <%=classify(name)%>Apis = {
};

@Injectable()
export class <%=classify(name)%>ApiService extends AbstractDomainApi<<%=classify(name)%>Apis>  {
  config: <%=classify(name)%>Apis;
  call: APIMethods<<%=classify(name)%>Apis>;

  constructor(private httpClient: HttpClient,apiURL = 'api/v1/' ) {
    super(httpClient,apiURL);
  }

}
