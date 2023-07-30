import {inject, Injectable, Input, TemplateRef} from '@angular/core';
import {OpenModalResult, UsingComponentRef, UsingTemplateRef} from "../types/modal.interface";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TemplateRefModalComponent} from "../modal-container/template-ref-modal/template-ref-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalsMangerService {
  private dialogService: MatDialog = inject(MatDialog)

  open(config: UsingTemplateRef | UsingComponentRef<Input>): OpenModalResult {
    return this.isTemplateRefType(config) ?
      this.openUsingTemplateRef(config) :
      this.dialogService.open(config.type, config.config)
  }

  private openUsingTemplateRef(config: UsingTemplateRef): MatDialogRef<TemplateRefModalComponent> {
    const dialogRef: MatDialogRef<TemplateRefModalComponent<any>, any> = this.dialogService.open(TemplateRefModalComponent, config.config);
    const templateConfig = dialogRef.componentInstance.templateConfig;
    if (templateConfig) {
      templateConfig.context = config.context;
      templateConfig.tempRef = config.type;
    }
    return dialogRef;
  }

  private isTemplateRefType(config: UsingTemplateRef | UsingComponentRef): config is UsingTemplateRef {
    return config.type instanceof TemplateRef;
  }

}
