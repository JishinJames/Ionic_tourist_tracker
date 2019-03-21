import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

  click_resto()
  {
    this.navCtrl.push('RestoPage');
  }
  click_hospi()
  {
    this.navCtrl.push('HospiPage');
  }click_hotels()
  {
    this.navCtrl.push('HotelsPage');
  }
  click_emer()
  {
    this.navCtrl.push('EmergencyPage');
  }
  

}
