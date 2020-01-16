import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiraMaiuscula'
})
export class primeiraMaiusculaPipe implements PipeTransform {
  
  transform(value: any, ...args: any[]): any {
    return `${value.split('')[0].toLocaleUpperCase()}${value.substr(1)}`
  }

}
