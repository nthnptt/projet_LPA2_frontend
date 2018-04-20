import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Town } from '../../model/town';
import { Observable } from 'rxjs';

@Injectable()
export class TownService {
  private URL = "https://projetlpa2111.herokuapp.com/towns"
  constructor(private http: HttpClient) { }

  getTown(id: number) : Observable<Town> {
    return this.http.get<Town>(`${this.URL}/${id}.json`);
  }

  getTowns(): Observable<Town[]> {
    return this.http.get<Town[]>(`${this.URL}.json`);
  }
}
