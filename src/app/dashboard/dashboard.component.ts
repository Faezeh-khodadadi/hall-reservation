import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    NzButtonModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [
    MessageService,
    NzMessageService
  ],
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
      currentImageIndex: 0,
      status: 'آماده رزرو'
    },
    {
      id: 2,
      name: 'تالار پذیرایی مجلل رویال',
      capacity: '۵۰۰ نفر',
      price: 'بر اساس پکیج مراسم',
      description: 'مناسب برای همایش‌های بزرگ، جشن‌ها و مراسم‌های رسمی',
      images: ['assets/salon2.jpg'],
      currentImageIndex: 0,
      status: 'آماده رزرو'
    },
    {
      id: 3,
      name: 'سالن جلسات مرکزی شهرداری',
      capacity: '۱۰۰ نفر',
      price: 'بر اساس ساعت',
      description: 'مناسب جلسات اداری، نشست‌های سازمانی و برنامه‌های رسمی',
      images: ['assets/salon3.jpg'],
      currentImageIndex: 0,
      status: 'آماده رزرو'
    }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private nzMessage: NzMessageService,
    private snackBar: MatSnackBar
  ) {}

  showPrimeMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'رزرو موفق',
      detail: 'رزرو سالن با موفقیت ثبت شد.'
    });
  }

  showZorroMessage() {
    this.nzMessage.warning('توجه: این رزرو هنوز توسط مدیر تأیید نشده است.');
  }

  showMaterialMessage() {
    this.snackBar.open(
      'اطلاعات سالن‌ها با موفقیت به‌روزرسانی شد.',
      'باشه',
      {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      }
    );
  }

  viewDetails(id: number) {
    this.nzMessage.info('اطلاعات تکمیلی سالن شماره ' + id);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
