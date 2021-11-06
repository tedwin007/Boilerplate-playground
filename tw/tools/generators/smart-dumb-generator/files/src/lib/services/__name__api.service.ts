import {
  APIMethods,
  DomainApiConfig
} from "../../../../../../../libs/shared/src/lib/api/interfaces/domain-api.config.interface";
import {AbstractDomainApi} from "../../../../../../../libs/shared/src/lib/api/abstruct-domain-api.class";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../apps/boilerplate/src/environments/environment";

type <%=classify(name)%>Apis: DomainApiConfig= {};

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
