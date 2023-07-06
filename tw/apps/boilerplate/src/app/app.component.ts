import {Component, OnInit} from '@angular/core';
export interface WithName {
  name: string
}

type Prod = { prodId: string, prodName: string, countSize: number };

@Component({
  selector: 'tw-root',
  template: `
    <header>
      <img src="https://cyesec.com/wp-content/themes/cye/images/logo-dark.svg">
    </header>
    <div class="content container">

    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  caching = new Map<string, number>();
  prodIdProdNameMap = new Map<string, string>();
  result: Prod[]

  get minimalView() {
    return this.result[this.result.length - 1]?.countSize || 0;

  }

  constructor(size = 10) {
    this.result = new Array(size)
  }

  private sort(): Prod[] {


  }

  insert(prodId: string, prodName: string): void {
    if (!this.caching.has(prodId)) {
      this.caching.set(prodId, 0)
      this.prodIdProdNameMap.set(prodId, prodName);
    }

    const value = (this.caching.get(prodId) as number) + 1;
    this.caching.set(prodId, value)

    //
    const min = this.minimalView
    const newResult = [];

    if (this.minimalView < value) {


      this.result.forEach((item: Prod, index: number) => {
        if(item?.countSize >= value){
          newResult.push(item)
        }else{
          const  arr =[...newResult,{},...newResult.splice(index+1,this.result.length-1)]
          newResult.push(item)
        }
      })
    }
  }


  lookup(): Prod[] {
    return this.result
  }


}

