import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BridalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/* @IonicPage() */
@Component({
  selector: 'page-bridal',
  templateUrl: 'bridal.html',
})
export class BridalPage {

	public bridalDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  		this.bridalDetails = this.navParams.get("bridalDetails");
  		console.log(this.bridalDetails);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BridalPage');
  }

}
