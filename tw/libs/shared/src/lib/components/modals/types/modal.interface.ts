import { TemplateRef} from '@angular/core';
import {MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/portal';
import {ModalContainerComponent} from "../modal-container/modal-container.component";


export interface OpenParams {
  type: TemplateRef<TemplateRefModal> | ComponentType<ModalContainerComponent>
  config: MatDialogConfig<any>
};

export interface TemplateRefModal {
  context: any,
  tempRef: TemplateRef<any>
}

export interface UsingTemplateRef extends OpenParams {
  type: TemplateRef<TemplateRefModal>
  context: any
};

export interface UsingComponentRef<T = any> extends OpenParams {
  type:  ComponentType<any>
};

export type OpenModalResult<Output = any> = MatDialogRef<ModalContainerComponent, Output>

