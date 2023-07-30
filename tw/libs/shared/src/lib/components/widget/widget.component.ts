import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  inject,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IWidget, toJsonResult} from "./models/widget.interface";
import {WidgetHeaderComponent} from "./widget-parts/widget-header/widget-header.component";
import {WidgetMangerService} from "./services/widget-manger.service";
import {WidgetConfig} from "./models/widget-config.interface";

@Component({
  selector: 'tw-widget',
  standalone: true,
  imports: [CommonModule, WidgetHeaderComponent],
  providers: [WidgetMangerService],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements AfterViewInit, IWidget<WidgetConfig> {
  public id = ' '
  @ViewChild('ref', { static:true,read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  public widgetService = inject(WidgetMangerService)
  @ViewChild('widgetTmpl') widgetTmpl!: TemplateRef<any>;
  @Input() version = 0
  @Input() config!: WidgetConfig;

  ngAfterViewInit(): void {
    this.config = this.widgetService.getValue()
    this.render();
  }

  render(vcr: ViewContainerRef = this.viewContainerRef, data?: WidgetConfig): EmbeddedViewRef<IWidget<WidgetConfig>> {
    const comp = vcr.createComponent(WidgetComponent, {injector: this.viewContainerRef.injector})
    comp.setInput('version', this.version)
    comp.setInput('config', data ? {...data, ...this.config} : this.config)
    vcr.clear()
    return vcr.createEmbeddedView(this.widgetTmpl)
  }

  toJson(): toJsonResult<WidgetConfig> {
    return this.widgetService.getValue();
  }

}
