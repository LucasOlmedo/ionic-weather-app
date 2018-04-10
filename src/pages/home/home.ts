import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherApiProvider } from '../../providers/weather-api/weather-api';

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

  constructor(public navCtrl: NavController, private apiProvider: WeatherApiProvider) {

  }

  ionViewWillEnter() {
    this.location = {
      city: 'Miami',
      state: 'FL'
    };

    this.apiProvider.getWeather(this.location.state, this.location.city)
      .subscribe((response: any) => {
        this.weather = response.current_observation;
      });
  }

}
