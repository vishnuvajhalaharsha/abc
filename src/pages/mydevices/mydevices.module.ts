import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MydevicesPage } from './mydevices';

@NgModule({
  declarations: [
    MydevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(MydevicesPage),
  ],
})
export class MydevicesPageModule {}
