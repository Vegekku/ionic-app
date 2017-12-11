import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masinfo',
  templateUrl: 'masinfo.html',
})
export class MasinfoPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.data.item !== undefined) {
        this.item = navParams.data.item;
    } else {
      this.item = [{
          'title': 'M&aacute;s info',
          'icon': 'beer',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex justo, sodales eu dignissim sit amet, fringilla quis quam. Duis euismod ligula luctus enim porta, eu mattis eros convallis. In tincidunt sit amet nisi quis condimentum. Praesent posuere magna in leo eleifend, in iaculis ligula fringilla. Nullam ultricies tellus eu ex pulvinar auctor. Nullam efficitur vel metus vitae varius. Phasellus felis purus, aliquam quis sapien a, lacinia congue lacus. Fusce viverra elit faucibus commodo condimentum. Suspendisse tempor et eros eget aliquam. Mauris in tempus nibh. Vivamus pulvinar eros in lectus vulputate, sit amet egestas neque lacinia. Nulla in neque vel tortor venenatis venenatis non et nisl. Sed aliquam tempor lacinia. Donec non mi sapien.',
          'color': '#291406'
      }]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasinfoPage');
  }

}
