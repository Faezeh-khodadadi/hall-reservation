import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  salons = [
    {
      id: 1,
      name: 'سالن همایش و تشریفات پاسارگاد',
      capacity: '۳۰۰ نفر',
      price: 'توافقی / تماس بگیرید',
      description: 'مجهز به سیستم صوت حرفه‌ای، نورپردازی مدرن و پارکینگ اختصاصی',
      images: ['assets/salon1.jpg'],
      currentImageIndex: 0
    },
    {
      id: 2,
      name: 'تالار پذیرایی مجلل رویال',
      capacity: '۵۰۰ نفر',
      price: 'بر اساس پکیج مراسم',
      description: 'مناسب برای همایش‌های بزرگ، جشن‌ها و مراسم‌های رسمی با دیزاین لوکس',
      images: ['assets/salon2.jpg'],
      currentImageIndex: 0
    }
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    alert('اطلاعات تکمیلی سالن شناسه: ' + id);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}