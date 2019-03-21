import { NgModule } from '@angular/core';
import { GoogleMapsComponent } from './google-maps/google-maps';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { KeyPage } from '../pages/key/key';

@NgModule({
	declarations: [GoogleMapsComponent,KeyPage],
	imports: [
		CommonModule,
		IonicModule.forRoot(KeyPage),
	],
	exports: [GoogleMapsComponent,KeyPage]
})
export class ComponentsModule {}
