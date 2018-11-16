import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MydevicesPage } from '../mydevices/mydevices'
import { RegisterPage } from '../register/register'
import { AuthService } from '../../providers/auth-service/auth-service';







@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    responseData: any;
    userData = {  "email": "" ,  "password": "" };

    
    constructor(public navCtrl: NavController, public authService: AuthService) {

  }
    goToSecondPage() {

        this.authService.postData(this.userData, 'login').then((result) => {
            this.responseData = result;

            if (this.responseData.userData) {
                console.log(this.responseData);
                localStorage.setItem('userData', JSON.stringify(this.responseData))
                this.navCtrl.push(MydevicesPage);



            }

            else (err) => {

            }
        });


    }
 goToEightPage()
         {
        this.navCtrl.push(RegisterPage);

}

}
