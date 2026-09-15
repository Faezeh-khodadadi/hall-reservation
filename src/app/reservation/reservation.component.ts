import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './reservation.component.html'
})
export class ReservationComponent {

  salonId: string | null = null;

  formData = {
    name: '',
    lastName: '',
    nationalId: '',
    mobile: '',
    ceremonyName: '',
    ceremonyType: '',
    date: '',
    guestsCount: null as number | null,
    endTime: '',
    timeGroup: 'fullDay'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.salonId = this.route.snapshot.paramMap.get('id');
  }


  // بازگشت به داشبورد
  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }


  // ثبت رزرو
  submitReservation() {

    console.log('اطلاعات رزرو:', this.formData);

    alert('درخواست رزرو با موفقیت ثبت شد ✅');

  }

}