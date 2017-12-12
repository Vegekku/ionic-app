import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    users;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public testProvider: TestProvider) {

  }

  ionViewDidLoad(){
      this.testProvider.getData()
          .subscribe(
              (data) => {
                  this.users = data;
              },
              (error) => {
                  console.log(error);
              }
          );
  }

  doAlert() {
      let alert = this.alertCtrl.create({
          title: "New Friend!",
          message: "Your friend, Obi wan Kenobi, just approved your friend request!",
          buttons: ['Ok']
      });
      alert.present();
  }

  doAlert2() {
      let alert = this.alertCtrl.create({
          title: "Login",
          message: "Enter a name for this new album you're so keen on adding",
          inputs: [
              {
                name: "Nombre",
                  placeholder: "Nombre"
              }
          ],
          buttons: [
              {
                  text: 'Cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Save',
                  handler: data => {
                      console.log('Saved clicked');
                  }
              }
          ]
      });
      alert.present();
  }

}
