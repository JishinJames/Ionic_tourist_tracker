import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController,NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
 
import { Tab1Root, Tab2Root, Tab3Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(private afAuth:AngularFireAuth,private toast:ToastController,public navParams:NavParams, public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });
  }
  ionViewWillLoad()
  {
    this.afAuth.authState.subscribe(data => {
      console.log(data.email);
      if (data && data.email && data.uid)
      {
      this.toast.create({
        message: `welcome to Travel Buddy, ${data.email}`,
        duration: 3000
      }).present();
    }
    else {
      this.toast.create({
        message: 'Invalid Authentication Details',
        duration: 3000
      }).present();
    }
    });
  }

}