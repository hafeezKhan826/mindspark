import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProgressComponent } from './my-progress.component';
import { SharedModule } from '../../shared/shared.module';
import { MyProgressService } from './my-progress.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyProgressComponent
  ],
  declarations: [
    MyProgressComponent,
  ],
  providers: [MyProgressService]
})
export class MyProgressModule {

}
