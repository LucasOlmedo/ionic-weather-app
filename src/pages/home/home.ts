import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherApiProvider } from '../../providers/weather-api/weather-api';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private weather: any;
  private location: {
    city: string,
    state: string
  };

  constructor(
    public navCtrl: NavController,
    private apiProvider: WeatherApiProvider,
    private storage: Storage
  ) {
    this.storage.get('location')
      .then(value => {

        if (value != null) {
          this.location = JSON.parse(value);
        } else {
          this.location = {
            city: 'Miami',
            state: 'FL'
          };
        }

        this.loadLocation(this.location.state, this.location.city);
      });
  }

  ionViewWillEnter() {

    this.storage.get('location')
      .then(value => {

        if (value != null) {
          this.location = JSON.parse(value);
        } else {
          this.location = {
            city: 'Miami',
            state: 'FL'
          };
        }

        this.loadLocation(this.location.state, this.location.city);
      });
  }

  ionViewDidLoad() {
    this.storage.get('location')
      .then(value => {

        if (value != null) {
          this.location = JSON.parse(value);
        } else {
          this.location = {
            city: 'Miami',
            state: 'FL'
          };
        }

        this.loadLocation(this.location.state, this.location.city);
      });
  }

  loadLocation(state, city) {
    
    this.apiProvider.getWeather(state, city)
    .subscribe((response: any) => {
      this.weather = response.current_observation;
    });
  }

}
