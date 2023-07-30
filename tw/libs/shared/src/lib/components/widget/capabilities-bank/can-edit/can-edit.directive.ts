import {AfterViewInit, Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserPermissions} from "../../models/user.permissions";
import {WidgetMangerService} from "../../services/widget-manger.service";


@Directive({
  selector: '[canEdit]'
})
export class CanEditDirective implements AfterViewInit{
  private widgetMangerService = inject(WidgetMangerService)
  private userTypes!: UserPermissions;
  private templateRef = inject(TemplateRef)

  @Input() set allowedUsers(value: UserPermissions[]) {
    this.widgetMangerService.setState({canEdit: value})
  }

  get allowedUsers(): UserPermissions[] {
    return this.widgetMangerService.getValue().canEdit || []
  }

  @Input() set canEdit(userTypes: UserPermissions) {
    this.userTypes = userTypes
  }

  private viewContainer = inject(ViewContainerRef);
  private hasView = false;

  private getIsHidden(userTypes: UserPermissions): boolean {
    return !this.allowedUsers.some((allowedUser: UserPermissions): boolean => allowedUser === userTypes)
  }


  ngAfterViewInit(): void {
    const isHidden = this.getIsHidden(this.userTypes);
    if (!isHidden ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (isHidden && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
