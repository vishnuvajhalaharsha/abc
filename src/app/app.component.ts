import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MydevicesPage } from '../pages/mydevices/mydevices';
import { HallPage } from '../pages/hall/hall';
import { KitPage } from '../pages/kit/kit';
import { SetPage } from '../pages/set/set';
import { AnalyPage } from '../pages/analy/analy';
import { HelpPage } from '../pages/help/help';
import { RegisterPage } from '../pages/register/register';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {



    

    constructor() {
        
    }


   

    rootPage: any = HomePage;

}


