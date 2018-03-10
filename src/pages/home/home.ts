import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductProvider } from '../../providers/product/product';

import { BridalPage } from '../../pages/bridal/bridal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public allProducts = [];

  constructor(private productProvider:ProductProvider,private httpClient:HttpClient, public navCtrl: NavController) {

  }


  ionViewDidLoad(){
    this.productProvider.getBridals().subscribe((response)=>{this.allProducts = response});
    
  }

  goToBridal(product){
  	this.navCtrl.push(BridalPage,{bridalDetails:product})
  }

}
