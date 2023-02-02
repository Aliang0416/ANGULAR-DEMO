import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, limit?: string): string {
    let date = new Date(value)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    /**
     * 补零函数
     * @param val 
     * @returns number
     */
    function addZero(val:number): string{
      return val < 10 ? '0' + val : val  +  ''
    }

    if(limit === 'yyyy-mm-dd'){
      return year + '-' + addZero(month) + '-' + addZero(day)
    }else if(limit === 'yyyy-mm'){
      return year + '-' + addZero(month)
    }
    else {
      return year + '-' + addZero(month) + '-' + addZero(day)  + '-' + addZero(hour) + '-' + addZero(min) + '-' + addZero(sec);
    }
  }

}
