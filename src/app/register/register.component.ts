import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './register.component.html'
})
export class RegisterComponent {

  firstName = '';
  lastName = '';
  mobile = '';
  email = '';
  password = '';
  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  isLoading = false;

  message = '';
  messageType: 'success' | 'error' = 'error';


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  get passwordStrength(): number {

    if (!this.password) {
      return 0;
    }

    let strength = 0;

    if (this.password.length >= 8) {
      strength++;
    }

    if (/[A-Z]/.test(this.password)) {
      strength++;
    }

    if (/[0-9]/.test(this.password)) {
      strength++;
    }

    if (/[^A-Za-z0-9]/.test(this.password)) {
      strength++;
    }

    return strength;
  }


  get passwordStrengthText(): string {

    switch (this.passwordStrength) {

      case 1:
        return 'رمز عبور ضعیف است';

      case 2:
        return 'رمز عبور متوسط است';

      case 3:
        return 'رمز عبور خوب است';

      case 4:
        return 'رمز عبور بسیار قوی است';

      default:
        return '';
    }
  }


  onRegister(): void {

    this.message = '';

    if (
      !this.firstName ||
      !this.lastName ||
      !this.mobile ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.message = 'لطفاً تمام فیلدها را تکمیل کنید.';
      this.messageType = 'error';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'رمز عبور و تکرار آن یکسان نیستند.';
      this.messageType = 'error';
      return;
    }

    if (this.password.length < 8) {
      this.message = 'رمز عبور باید حداقل ۸ کاراکتر باشد.';
      this.messageType = 'error';
      return;
    }


    // اطلاعاتی که بعداً به API ارسال می‌شوند
    const registerData = {
      first_name: this.firstName,
      last_name: this.lastName,
      mobile: this.mobile,
      email: this.email,
      password: this.password
    };

    console.log('Register Data:', registerData);

    this.message = 'اطلاعات ثبت‌نام آماده ارسال است.';
    this.messageType = 'success';
  }
}