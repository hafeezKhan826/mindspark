import { Component } from '@angular/core';
import { MyDetailsT2Component } from '../my-details-t2/my-details-t2.component';

@Component({
  selector: 'ms-my-details-t1',
  templateUrl: './my-details-t1.component.html',
  styleUrls: ['./my-details-t1.component.scss']
})
export class MyDetailsT1Component extends MyDetailsT2Component { }
