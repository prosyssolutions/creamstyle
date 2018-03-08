import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private productProvider:ProductProvider,private httpClient:HttpClient, public navCtrl: NavController) {

  }


  ionViewDidLoad(){
    this.productProvider.getProducts().subscribe(response => console.log(response));
    
  }

}
