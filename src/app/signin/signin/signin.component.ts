import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {}
  signinForm!: FormGroup;

  ngOnInit(): void {
    this.signinFormHandler();
  }

  private signinFormHandler(): void {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.sessionService.storeUserName(this.signinForm.value.username);
    this.sessionService.userAuthenticated();
    this.router.navigate(['/dashboard']);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signinForm.controls;
  }
}
