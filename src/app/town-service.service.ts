import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Town } from './town'
import { Observable } from 'rxjs';

@Injectable()
export class TownServiceService {
  private URL : string;
  constructor(
    private http: HttpClient,
  ) {
    this.http=http
    this.URL='http://lpa2sgadot.herokuapp.com/towns'
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Town[]> {
    return this.http.get<Town[]>(this.URL)
  }
}
