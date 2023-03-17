import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(text: string, by: string) {
    let arr = text.split(by); // split text by "by" parameter
    return arr// after splitting to array return wanted index
  }
}
