import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  private _unsubscribeAll: Subject<void> = new Subject();
  constructor(private sessionService: SessionService) {}
  ngOnInit(): void {
    this.fetchLoadingState();
  }

  private fetchLoadingState(): void {
    this.sessionService.hasLoading
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (loading: boolean) => {
          this.isLoading = loading;
        },
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
