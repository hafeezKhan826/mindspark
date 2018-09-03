import { Component } from '@angular/core';
import { ReadMailT2Component } from '../read-mail-t2/read-mail-t2.component';

@Component({
  selector: 'ms-read-mail-t1',
  templateUrl: './read-mail-t1.component.html',
  styleUrls: [
    '../read-mail-t2/read-mail-t2.component.scss',
    './read-mail-t1.component.scss'
  ]
})
export class ReadMailT1Component extends ReadMailT2Component { }
