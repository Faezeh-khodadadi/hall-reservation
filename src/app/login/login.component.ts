import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    const credentials = { email: this.email, password: this.password };

    this.http.post('http://127.0.0.1:8000/api/login', credentials).subscribe({
      next: (response: any) => {
        this.message = 'ورود موفقیت‌آمیز بود! در حال انتقال...';
        setTimeout(() => {
          this.router.navigate(['/reservation']);
        }, 1000);
      },
      error: (err) => {
        this.message = 'ایمیل یا رمز عبور اشتباه است!';
      }
    });
  }
}