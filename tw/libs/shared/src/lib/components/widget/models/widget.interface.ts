import {EmbeddedViewRef, ViewContainerRef} from "@angular/core";

export type toJsonResult<T> = Record<keyof T, T[keyof T]>;

export interface IWidget<T> {
  config: T;
  id: string;
  version: number;
  toJson: () => toJsonResult<T>;
  render: (vcr: ViewContainerRef, data?: T) => EmbeddedViewRef<IWidget<T>>
}





