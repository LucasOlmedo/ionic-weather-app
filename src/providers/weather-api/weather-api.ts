import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class WeatherApiProvider {

  private apiKey: string = '9eb3d214fabe3030';
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`
  }

  getWeather(state, city) {
    return this.http.get(`${this.apiUrl}/${state}/${city}.json`);
  }

}
