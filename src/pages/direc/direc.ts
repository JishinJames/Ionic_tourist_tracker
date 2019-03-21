import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DirecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direc',
  templateUrl: 'direc.html',
})
export class DirecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirecPage');
  }

  click_places()
  {
    this.navCtrl.push('TabsPage');
  }
  click_maps()
  {
    this.navCtrl.push('MapsPage');
  }
  click_gps()
  {
    this.navCtrl.push('LocationPage');
  }

}
