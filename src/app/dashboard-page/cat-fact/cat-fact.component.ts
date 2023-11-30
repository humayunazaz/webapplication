import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ICatFactDTO } from '../models/catFact';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css'],
})
export class CatFactComponent implements OnInit {
  catFact: string = '';
  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService
  ) {}
  ngOnInit(): void {
    this.fetchCatFactHandler();
  }

  private fetchCatFactHandler(): void {
    this.sessionService.setLoadingState(true);
    this.apiService
      .getCatFact()
      .pipe(take(1))
      .subscribe({
        next: (res: ICatFactDTO) => {
          this.catFact = res.fact;
          this.sessionService.setLoadingState(false);
        },
        error: (err) => {
          this.sessionService.setLoadingState(false);
          this.snackBar.open(
            'Connection error! Failed to fetch cat fact, Please try again!',
            'Ok',
            {
              duration: 2000,
            }
          );
        },
        complete: () => {},
      });
  }

  public updateCatFact(): void {
    this.fetchCatFactHandler();
  }
}
