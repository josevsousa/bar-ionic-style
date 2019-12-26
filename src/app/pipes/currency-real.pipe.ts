import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyReal'
})
export class CurrencyRealPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
