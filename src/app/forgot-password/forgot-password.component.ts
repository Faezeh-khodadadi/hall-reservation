import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  email: string = '';
  newPassword: string = '';
  successMessage: string = '';

  onResetPassword() {
    this.successMessage = 'رمز عبور شما با موفقیت تغییر کرد!';
  }
}