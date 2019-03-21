import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospiPage } from './hospi';

@NgModule({
  declarations: [
    HospiPage,
  ],
  imports: [
    IonicPageModule.forChild(HospiPage),
  ],
})
export class HospiPageModule {}
