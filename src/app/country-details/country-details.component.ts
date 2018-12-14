import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from '../userResponse';
import { RestService } from '../rest.service';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../home/weatherResponse';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{

  displayData : UserResponse;
  displayTemp : WeatherResponse;
  Temperature : number;

  constructor(  private route: ActivatedRoute, private restService:RestService, private weatherService: WeatherService ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   
    this.restService.getData()
    .subscribe(data => {
      this.displayData = data.find(entry => entry.name === id);
     // console.log(this.displayData[id]);
    
      this.weatherService.getData(this.displayData.capital).subscribe(data => {
      return this.Temperature=(data.data[0].temp);
     })
    });
    
    /*this.weatherService.getData()
    .subscribe(data => {
      this.displayTemp = data.find(entry => entry.city_name === id);
  
    });*/
  }


}
