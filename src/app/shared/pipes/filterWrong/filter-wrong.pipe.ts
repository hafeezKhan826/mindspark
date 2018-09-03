import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterWrong'
})
export class FilterWrongPipe implements PipeTransform {

  transform(items: any, value: any, args?: any): any {

    if (!value) {
      return items;
    } else {
      return items.filter(function (item) {
        const userAnswer = (item.userAnswer.result) ? item.userAnswer.result : null;
        if (item.contentType.toLowerCase() === 'question' && userAnswer !== null) {
          return item.userAnswer.result.toLowerCase() === 'fail';
        } else {
          return items;
        }
      });
    }
  }

}
