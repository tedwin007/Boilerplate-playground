import {AfterViewInit, Component, inject, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {getPreDefinedModal} from "./predefine-modals/utils";
import {ModalsMangerService} from "../../../../libs/shared/src/lib/components/modals/services/modals-manger.service";
import {ModalSize, TemplateRefModal} from "@tw/shared";

@Component({
  selector: 'tw-root',
  template: `

      <header>
      </header>

      <div class="sub-header">
          <div><tw-searchbar></tw-searchbar></div>
      </div>

      <div class="container">
        <confirm-modal [data]="{title: 'Custom', cancel: 'Cancel', content: 'dsd'}">
          Body
        </confirm-modal>
      </div>

      <ng-template #CustomModal>
          <modal-container>
              <p mat-dialog-content>Body</p>
              <h2 mat-dialog-title>Custom Header</h2>
          </modal-container>
      </ng-template>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit ,AfterViewInit{
  @ViewChild('CustomModal', {read: TemplateRef}) customModal!: TemplateRef<TemplateRefModal>
  service: ModalsMangerService = inject(ModalsMangerService)
  openConfirmModal = getPreDefinedModal('ConfirmModal')

  ngOnInit(): void {
    this.openConfirmModal({title: '1', approve: 'Approve', cancel: 'Cancel', content: "sdf"})
      .afterClosed()
      .subscribe((res: any) => console.log(res))

  }

  ngAfterViewInit(): void {
    this.service.open({
      type: this.customModal,
      context: this,
      config: {data:{},width:ModalSize.S,
      }
    })
  }
}

