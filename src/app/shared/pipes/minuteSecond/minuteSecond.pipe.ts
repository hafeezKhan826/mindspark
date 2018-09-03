import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from '../../shared.service';

@Pipe({
  name: 'minuteSecond'
})
export class MinuteSecondPipe implements PipeTransform {

  constructor(private sharedService: SharedService) { }

  transform(value: any): string {
    let type: string, time: number, returnTime = '';
    value = value.split('--');
    time = value[0];
    type = value[1].toLowerCase();
    if (time !== (null && undefined)) {
      if (type === 'mmss') {
        returnTime = this.transformToMinuteSecond(time);
      } else {
        returnTime = this.transformToMinute(time);
      }
    }
    return returnTime;
  }

  transformToMinute(value: number): string {
    let min: number, minutes: string, sec: number;
    min = Math.floor(value / 60);
    if (min === 0) {
      sec = value - min * 60;
      minutes = this.generateTimeString(sec, 'sec');
    } else {
      minutes = this.generateTimeString(min, 'min');
    }
    return minutes;
  }

  transformToMinuteSecond(value: number): string {
    let min: number, minutes: string, sec: number, seconds: string;
    min = Math.floor(value / 60);
    minutes = this.generateTimeString(min, 'min');
    sec = value - min * 60;
    seconds = this.generateTimeString(sec, 'sec');
    return minutes + seconds;
  }

  private generateTimeString(time, type) {
    let timeText;
    timeText = this.sharedService.padPrefix(time, 2, '0') + ' ' + type;
    timeText += (time > 1) ? 's ' : ' ';
    return timeText;
  }
}
