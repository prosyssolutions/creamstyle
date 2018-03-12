import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the BridalslideshowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/* @IonicPage() */
@Component({
  selector: 'page-bridalslideshow',
  templateUrl: 'bridalslideshow.html',
})
export class BridalslideshowPage {

	public bestSellerProducts = [];
	

  constructor(private productProvider: ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
  

  }

  ionViewDidLoad(){
    this.productProvider.getBridals().subscribe((response)=>{this.bestSellerProducts = response.filter(product => product.bestSeller == true);
    });
    
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad BridalslideshowPage');
  } */

}
