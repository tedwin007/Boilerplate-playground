import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'severity'
})
export class SeverityPipe implements PipeTransform {
  private _severityIcons: Map<number, string> = new Map([
    [1, 'fas fa-check-square reachable'],
    [2, 'fas fa-exclamation-triangle major'],
    [3, 'fas fa-times-circle critical']
  ]);

  transform(value: number | string): string | number  {
    console.log(value);
    return this._severityIcons.get(Number(value)) || value;
  }

}
