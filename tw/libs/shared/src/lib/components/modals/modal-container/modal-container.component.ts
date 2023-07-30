import {Component, inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {WithData} from "../types/with-data.interface";

@Component({
  selector: 'modal-container',
  template: `
    <div class="dialog">
      <div class="x-icon" *ngIf="matDialogRef" (click)="matDialogRef.close()">X</div>
      <div class="dialog-header">
        <ng-content select="[mat-dialog-title]"></ng-content>
      </div>

      <section class="dialog-content">
        <ng-content select="[mat-dialog-content]"></ng-content>
      </section>

      <div class="dialog-footer">
        <ng-content select="[mat-dialog-actions]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnInit {
  @Input() data: WithData<any> = inject<WithData>(MAT_DIALOG_DATA, {optional: true}) || {data: {}};
  private dialogService: MatDialog = inject(MatDialog)
  matDialogRef?: MatDialogRef<any>;

  ngOnInit() {
    this.matDialogRef = this.dialogService.openDialogs.shift();
  }
}
