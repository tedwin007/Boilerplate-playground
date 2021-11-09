import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'severity'
})
export class SeverityPipe implements PipeTransform {
  private _severityIcons = new Map([
    [1, 'fas fa-check-square reachable'],
    [2, 'fas fa-exclamation-triangle major'],
    [3, 'fas fa-times-circle critical']
  ]);

  transform(value: number | string): unknown {
    return this._severityIcons.get(Number(value));
  }

}
