/**
 * Created by if_found_call_0586288454 on 27/04/2017 ap. J.-C..
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'DictionaryIteratorPipe',  pure: false })
export class DictionaryIteratorPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}

@Pipe({name: 'GetPercentage'})
export class GetPercentagePipe implements PipeTransform {
  transform(value: number, total: number, args: number[]): any {
    if (!value) {return value};
    return (value / total) * 100 + ' %';
  }
}
