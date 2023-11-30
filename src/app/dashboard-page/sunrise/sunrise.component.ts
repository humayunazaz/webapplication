import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AbstractControl } from '@angular/forms';
import {
  ISunriseDTO,
  ISunrisePayload,
  ISunriseResponse,
} from '../models/sunrise';
import { take } from 'rxjs';
import { formatDate } from '@angular/common';
import { SessionService } from 'src/app/services/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sunrise',
  templateUrl: './sunrise.component.html',
  styleUrls: ['./sunrise.component.css'],
})
export class SunriseComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    @Inject(LOCALE_ID) public locale: string,
    private sessionService: SessionService,
    private snackBar: MatSnackBar
  ) {}
  sunriseForm!: FormGroup;
  sunriseSunset!: ISunriseDTO;
  ngOnInit(): void {
    this.sunriseFormHandler();
    this.storedSunriseHandler();
  }

  private sunriseFormHandler(): void {
    this.sunriseForm = this.fb.group({
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  public onSubmitSunriseHandler(): void {
    if (this.sunriseForm.invalid) {
      return;
    }
    const payload: ISunrisePayload = this.sunriseForm.value;
    payload.date = formatDate(payload.date, 'yyyy-M-d', this.locale);
    this.sessionService.setLoadingState(true);
    this.apiService
      .getSunriseTime(payload)
      .pipe(take(1))
      .subscribe({
        next: (res: ISunriseResponse) => {
          if (res.status === 'OK') {
            this.sunriseSunset = res.results;
            this.sessionService.setLoadingState(false);
            this.sessionService.storeSunrise(res.results);
            this.sessionService.storeSunrisePayload(payload);
          }
        },
        error: (err) => {
          this.sessionService.setLoadingState(false);
          this.snackBar.open(
            'Connection error! Failed to fetch sunrise sunset times, Please try again!',
            'Ok',
            {
              duration: 2000,
            }
          );
        },
        complete: () => {},
      });
  }

  private storedSunriseHandler(): void {
    const sunrise = this.sessionService.getSunrise();
    const sunrisePayload = this.sessionService.getSunrisePayload();
    if (sunrisePayload) {
      this.sunriseForm.setValue(sunrisePayload);
    }

    if (sunrise) {
      this.sunriseSunset = sunrise;
    }
  }
  get l(): { [key: string]: AbstractControl } {
    return this.sunriseForm.controls;
  }
}
