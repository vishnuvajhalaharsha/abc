import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AuthService } from '../providers/auth-service/auth-service';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ MydevicesPage } from '../pages/mydevices/mydevices';
import{ HallPage } from '../pages/hall/hall';
import{ KitPage } from '../pages/kit/kit';
import{ SetPage } from '../pages/set/set';
import{ AnalyPage } from '../pages/analy/analy';
import{ HelpPage } from '../pages/help/help';
import { RegisterPage } from '../pages/register/register';









@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MydevicesPage,
    HallPage,
    KitPage,
    SetPage,
    AnalyPage,
     HelpPage,
    RegisterPage,
    
  ],
  imports: [
      BrowserModule, HttpClientModule, HttpModule,
    IonicModule.forRoot(MyApp),
 
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MydevicesPage,
    HallPage,
    KitPage,
    SetPage,
    AnalyPage,
      HelpPage,
     RegisterPage,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
