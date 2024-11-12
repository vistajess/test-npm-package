import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MySecondLibModule } from '@jevi_test/my-second-lib';

@NgModule({
  declarations: [MyLibComponent],
  imports: [MySecondLibModule],
  exports: [MyLibComponent]
})
export class MyLibModule { }