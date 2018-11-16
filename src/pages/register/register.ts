import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MydevicesPage } from '../mydevices/mydevices';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {


    responseData: any;
    userData = { "username": "", "password": "", "name": "", "email": "" };


    constructor(public navCtrl: NavController, public authService: AuthService)
    {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    goToSecondPage() {

        this.authService.postData(this.userData, 'signup').then((result) => {
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
}
