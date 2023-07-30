import {Component, Input} from '@angular/core';
import {Tab} from "./models/tab.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'tw-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() tabs: Tab[] = [];

  get current(){
    return this.tabs.filter((item: Tab)=> item.selected)[0]
  }
  select(item:Tab){
    this.current.selected = false;
    item.selected = true
  }
}
