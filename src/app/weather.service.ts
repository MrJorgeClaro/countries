import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from './userResponse';
import { WeatherResponse } from './home/weatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //city : UserResponse = this.city.capital; 

  constructor(private weatherHttp: HttpClient) { }

  displayCapital: WeatherResponse [];

  getData(capital: string): Observable <WeatherResponse[]> {  
    return this.weatherHttp.get<WeatherResponse[]>(`https://api.weatherbit.io/v2.0/current?city=${capital}&key=58084d7dd8c048aab445e0ecf540a63a`);
    //console.log('https://api.weatherbit.io/v2.0/current?city=${displayCapital}&key=58084d7dd8c048aab445e0ecf540a63a');
  }
}
