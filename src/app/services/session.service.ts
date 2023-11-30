import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISunriseDTO, ISunrisePayload } from '../dashboard-page/models/sunrise';

const USERNAME = 'Username';
const ISLOGEDIN = 'LogedIn';
const SUNRISE = 'Sunrise';
const LATLNG = 'Latlng';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  public storeUserName(name: string): void {
    localStorage.setItem(USERNAME, name);
  }

  public getUserName(): string {
    const username = localStorage.getItem(USERNAME);
    return username ? username : '';
  }

  public userAuthenticated(): void {
    localStorage.setItem(ISLOGEDIN, JSON.stringify(true));
  }

  public getUserAuth(): boolean {
    const auth = localStorage.getItem(ISLOGEDIN);
    return auth ? JSON.parse(auth) : false;
  }

  public signOutHandler(): void {
    localStorage.clear();
  }

  public setLoadingState(loading: boolean): void {
    this.isLoading.next(loading);
  }

  public get hasLoading(): Observable<boolean> {
    return this.isLoading;
  }

  public storeSunrise(sunrise: ISunriseDTO): void {
    localStorage.setItem(SUNRISE, JSON.stringify(sunrise));
  }

  public getSunrise(): ISunriseDTO | null {
    const sunrise = localStorage.getItem(SUNRISE);
    return sunrise ? JSON.parse(sunrise) : null;
  }

  public storeSunrisePayload(payload: ISunrisePayload): void {
    localStorage.setItem(LATLNG, JSON.stringify(payload));
  }

  public getSunrisePayload(): ISunrisePayload | null {
    const sunrise = localStorage.getItem(LATLNG);
    return sunrise ? JSON.parse(sunrise) : null;
  }
}
