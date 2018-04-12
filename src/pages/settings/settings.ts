import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string = '';
  state: string = '';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private storage: Storage,
    private toast: ToastController
  ) {

    this.storage.get('location').then((value) => {
      if (value != null) {
        let location = JSON.parse(value);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Miami';
        this.state = 'FL';
      }
    });
  }

  saveLocation() {
    let location = {
      city: this.city,
      state: this.state
    };
    
    this.storage.set('location', JSON.stringify(location));
    
    let toast = this.toast.create({
      message: 'Location was changed successfully',
      duration: 2000,
      position: 'top'
    });
  
    toast.present();
  }
}
