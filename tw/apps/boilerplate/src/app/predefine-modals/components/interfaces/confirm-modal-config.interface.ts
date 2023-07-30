import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {ModalSize} from "../../../../../../../libs/shared/src/lib/components/modals/types/modal-size.enum";
import {ConfirmModalData} from "./confirm-modal-data.interface";

export interface ConfirmModalConfig {
  type: ConfirmModalComponent;
  config: {
    data: ConfirmModalData;
    hasBackdrop: boolean;
    width: ModalSize
  }
}
