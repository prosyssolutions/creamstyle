import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BridalPage } from '../pages/bridal/bridal';
import { BridalslideshowPage } from '../pages/bridalslideshow/bridalslideshow';
import { FilterModalPage } from '../pages/filter-modal/filter-modal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ProductProvider } from '../providers/product/product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BridalPage,
    BridalslideshowPage,
    FilterModalPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BridalPage,
    BridalslideshowPage,
    FilterModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider
  ]
})
export class AppModule {}
