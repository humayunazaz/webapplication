import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [{ path: '', component: SigninComponent }];
@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [SigninComponent, RouterModule],
})
export class SigninModule {}
