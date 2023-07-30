import {ConfirmModalComponent} from "./components/confirm-modal/confirm-modal.component";
export const PreDefinedModalsType: Map<string, any> = new Map([['ConfirmModal', ConfirmModalComponent]]);
export const getPreDefinedModal = function (type:string) {
  return PreDefinedModalsType.get(type)?.init()

}
