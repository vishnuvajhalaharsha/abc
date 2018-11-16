import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HallPage } from '../hall/hall';
import{ KitPage } from '../kit/kit';
import{ SetPage } from '../set/set';
import{ AnalyPage } from '../analy/analy';
import { HelpPage } from '../help/help';
import { AuthService } from '../../providers/auth-service/auth-service';






@IonicPage()

@Component({
  selector: 'page-mydevices',
  templateUrl: 'mydevices.html',
})
export class MydevicesPage {



    public userDetails: any; 
    public resposeData: any;
    public dataSet: any;
    userPostData = {
        "user_id": "",
        "token": "",
        "feed": "",
        
    };

    constructor(public navCtrl: NavController, public authService: AuthService) {

        const data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getFeed();


 }
    getFeed() {
        this.authService.postData(this.userPostData, "getFeed")
            .then((result) => {
                this.resposeData = result;
                if (this.resposeData.feedData) {

                    this.dataSet = this.resposeData.feedData;
                    console.log("this.dataSet");
                }
                else {
                    console.log("No access");
                }

            }, (err) => {
                //Connection failed message
            });




    }


    feedUpdate() {

        if (this.userPostData.feed) {
            
            this.authService.postData(this.userPostData, "feedUpdate")
                .then((result) => {
                    this.resposeData = result;
                    if (this.resposeData.feedData) {
                       
                        this.dataSet.unshift(this.resposeData.feedData);
                        this.userPostData.feed = "";
                    } else {
                        console.log("No access");
                    }

                }, (err) => {
                    //Connection failed message
                });
        }
    }

  goToThirdPage()
  {
   this.navCtrl.push(HallPage);
  }
  goToFourthPage()
  {
     this.navCtrl.push(KitPage);

  }
  goToFivePage()
   {
       this.navCtrl.push(SetPage);

  }
  goToSixPage()
  {
      this.navCtrl.push(AnalyPage);
  }
  goToSevenPage()
  {
      this.navCtrl.push(HelpPage);
  }




 }


