import {Component, inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConfirmModalConfig} from "../interfaces/confirm-modal-config.interface";
import {ConfirmModalData} from "../interfaces/confirm-modal-data.interface";
import {
  ModalsMangerService
} from "../../../../../../../libs/shared/src/lib/components/modals/services/modals-manger.service";
import {ModalSize} from "@tw/shared";


@Component({
  selector: 'confirm-modal',
  styles: [`:host {
    width: inherit;
    height: inherit;
  }`],
  template: `
    <modal-container>
      <p mat-dialog-title> {{ data?.title || 'Confirm'}}</p>

      <p mat-dialog-content>
        <span *ngIf="data?.content" [innerHTML]='data?.content'></span>
        <span *ngIf="!data?.content"><ng-content></ng-content></span>
      </p>

      <div mat-dialog-actions>
        <button primary-btn mat-button [mat-dialog-close]="false">{{data?.cancel || 'Cancel' }}</button>
        <button regular-btn mat-button [mat-dialog-close]="true" cdkFocusInitial>{{data?.approve || 'Confirm' }}</button>
      </div>
    </modal-container>
  `,
})
export class ConfirmModalComponent {
  @Input() data = inject<ConfirmModalData>(MAT_DIALOG_DATA, {optional: true});

  static init(config?: Partial<ConfirmModalConfig>){
    const service: ModalsMangerService = inject(ModalsMangerService)
    const type = ConfirmModalComponent
    return (data:ConfirmModalData) => service.open({
      type,
      config: {
        hasBackdrop: true,
        width: ModalSize.L,
        data,
        ...(config || {})
      }
    })
  }
}
