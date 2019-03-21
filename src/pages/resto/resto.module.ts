import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestoPage } from './resto';

@NgModule({
  declarations: [
    RestoPage,
  ],
  imports: [
    IonicPageModule.forChild(RestoPage),
  ],
})
export class RestoPageModule {}
