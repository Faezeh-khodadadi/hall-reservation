import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  phone = '';
  email = '';
  password = '';
  showPassword = false;
  message = '';
  isError = false;

  constructor(private http: HttpClient, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onRegister() {
    const userData = { 
      name: this.name, 
      phone: this.phone, 
      email: this.email, 
      password: this.password 
    };

    this.http.post('http://127.0.0.1:8000/api/register', userData).subscribe({
      next: (response: any) => {
        this.isError = false;
        this.message = 'ثبت‌نام با موفقیت انجام شد! در حال انتقال...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (err) => {
        this.isError = true;
        this.message = 'خطا در ثبت‌نام! اطلاعات را بررسی کنید.';
      }
    });
  }
}