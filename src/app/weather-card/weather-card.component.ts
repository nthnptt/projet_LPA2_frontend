import { Component, OnInit } from '@angular/core';
import { Town } from '../model/town';
import { TownService } from '../services/town/town.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  loadmode: boolean;
	private town: Town;
  private townService: TownService;
  constructor(private http: HttpClient) {
	  this.townService = new TownService(http)
  }

  ngOnInit() {
    this.refreshWeather()
  }

  refreshWeather(){
    this.loadmode=true;
    this.townService.getTown(1).subscribe(town => {
      this.town=town;
      this.loadmode=false;
    });
  }

}
