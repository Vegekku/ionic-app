import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  doAlert() {
      let alert = this.alertCtrl.create({
          title: "New Friend!",
          message: "Your friend, Obi wan Kenobi, just approved your friend request!",
          buttons: ['Ok']
      });
      alert.present();
  }

}
