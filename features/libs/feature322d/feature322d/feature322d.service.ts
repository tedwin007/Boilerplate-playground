import { Injectable } from '@angular/core';
import { DataList } from './models/types/Data-list.type';
import {AbstractBaseFlux} from "@tw/shared";

@Injectable()
export class Feature322dService extends AbstractBaseFlux<DataList[]>  {

  constructor(state:DataList = []) {
    super(<DataList[]>state);
  }

}
