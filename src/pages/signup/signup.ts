import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user"
import { AngularFireAuth } from 'angularfire2/auth';
  /**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;
  constructor(private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  async register(user:User) {
  try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    console.log(result);
    if (result)
    {
      this.navCtrl.push('LoginPage');
    }
  }
  
  catch(e){
    console.error(e);
  }
 }
}
