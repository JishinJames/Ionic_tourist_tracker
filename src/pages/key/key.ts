import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-key',
  templateUrl: 'key.html',
})
export class KeyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avatar: 'assets/img/marty-avatar.png';
  ionViewDidLoad() {
    console.log('ionViewDidLoad KeyPage');
  }
  
  click_dehra()
  {
    this.navCtrl.push('DirecPage');
  }
  
}
