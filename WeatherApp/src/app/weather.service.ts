import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '99070153f2f51c7eb63b29e6c73c23eb';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }
}
