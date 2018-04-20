import { Component, OnInit } from '@angular/core';
import { TownService } from '../services/town/town.service';
import { Town } from '../model/town';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  loadmode: boolean;
	private towns: Town[];
  private townService: TownService;

  constructor(private http: HttpClient) {
    this.townService = new TownService(http)
  }

  ngOnInit() {
    this.refreshAllTown()
  }

  refreshAllTown(){
    this.loadmode=true;
    this.townService.getTowns().subscribe(towns => {
      this.towns=towns;
      this.loadmode=false;
      console.log(this.towns)
    });
  }

}
