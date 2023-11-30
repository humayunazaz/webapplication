import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatFactDTO } from '../dashboard-page/models/catFact';
import {
  ISunrisePayload,
  ISunriseResponse,
} from '../dashboard-page/models/sunrise';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = {
    'content-type': 'application/json',
  };
  catFactUrl: string = 'https://catfact.ninja/fact';
  sunriseUrl: string = 'https://api.sunrise-sunset.org/json';

  constructor(private http: HttpClient) {}

  getCatFact(): Observable<ICatFactDTO> {
    const url = this.catFactUrl;
    return this.http.get<ICatFactDTO>(url, { headers: this.headers });
  }

  getSunriseTime(payload: ISunrisePayload): Observable<ISunriseResponse> {
    const url = `${this.sunriseUrl}?lat=${payload.lat}&lng=${payload.lat}&date=${payload.date}`;
    return this.http.get<ISunriseResponse>(url, { headers: this.headers });
  }
}
