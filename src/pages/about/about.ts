import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  list: Array<any> = [
    {
      title: "Shopping",
      icon: "cart",
      color: "#111"
    },
    {
      title: "Hospital",
      icon: "medical",
      color: "#222"
    },
    {
      title: "Cafe",
      icon: "cafe",
      color: "#333"
    },
    {
      title: "Dog Park",
      icon: "paw",
      color: "#444"
    },
    {
      title: "Pub",
      icon: "beer",
      color: "#555"
    },
    {
      title: "Space",
      icon: "planet",
      color: "#666"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}