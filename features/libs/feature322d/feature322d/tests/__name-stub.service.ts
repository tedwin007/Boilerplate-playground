import { Injectable } from '@angular/core';
import { DataDataItem } from './models/Data-data.class';
import { DataList } from './models/types/Data-.type';

@Injectable()
export class Feature322dStubService extends AbstractBaseFlux<DataDataItem>  {

constructor(state:DataList = []) {
  super(state);
}

}
