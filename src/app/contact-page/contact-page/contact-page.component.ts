import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactFormHandler();
  }
  private contactFormHandler(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: '',
    });
  }

  public onSubmit(): void {}
  get c(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
}
