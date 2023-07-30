import {Injectable} from '@angular/core';
import {StateManger} from "../../../services/state-manger-service";
import {WidgetConfig} from "../models/widget-config.interface";
import {UserPermissions} from "../models/user.permissions";

@Injectable({
  providedIn: 'root'
})
export class WidgetMangerService extends StateManger<WidgetConfig> {
  constructor() {
    super({
      canEdit: [UserPermissions.admin]
    })
  }
}
