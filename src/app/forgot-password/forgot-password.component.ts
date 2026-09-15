import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  phone: string = '';
  isLoading: boolean = false;

  message: string = '';
  messageType: 'success' | 'error' = 'error';

  private apiUrl: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  sendResetCode(): void {

    this.message = '';
    this.phone = this.phone.trim();

    if (!this.phone) {
      this.message = 'لطفاً شماره موبایل خود را وارد کنید.';
      this.messageType = 'error';
      return;
    }

    const phoneRegex = /^09\d{9}$/;

    if (!phoneRegex.test(this.phone)) {
      this.message = 'لطفاً یک شماره موبایل معتبر وارد کنید.';
      this.messageType = 'error';
      return;
    }

    this.isLoading = true;

    const url = this.apiUrl + '/send-reset-code';

    this.http.post<{ message: string }>(
      url,
      {
        phone: this.phone
      }
    ).subscribe({
      
      next: (response) => {
        this.isLoading = false;

        this.message =
          response.message || 'کد تأیید با موفقیت ارسال شد.';

        this.messageType = 'success';
      },

      error: (error) => {
        this.isLoading = false;

        if (error.status === 404) {
          this.message =
            'کاربری با این شماره موبایل پیدا نشد.';
        }
        else if (error.status === 422) {
          this.message =
            'اطلاعات وارد شده صحیح نیست.';
        }
        else if (error.status === 0) {
          this.message =
            'ارتباط با سرور برقرار نشد. مطمئن شوید Laravel در حال اجراست.';
        }
        else {
          this.message =
            'خطایی در سرور رخ داد. لطفاً دوباره تلاش کنید.';
        }

        this.messageType = 'error';
      }
    });
  }
}