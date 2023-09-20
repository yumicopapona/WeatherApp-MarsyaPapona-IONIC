import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherData: any;
  location: string = 'Manado';
  todayDate = new Date()

  constructor(private weatherService: WeatherService) {}

  ionViewWillEnter() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.location).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
