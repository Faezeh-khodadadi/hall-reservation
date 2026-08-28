import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reservation.component.html'
})
export class ReservationComponent {
  salonId: any;
  
  formData = {
    name: '',
    lastName: '',
    nationalId: '',
    mobile: '',
    ceremonyName: '',
    ceremonyType: '',
    date: '',
    guestsCount: '',
    endTime: '',
    timeGroup: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.salonId = this.route.snapshot.paramMap.get('id');
  }

  submitReservation() {
    console.log('Submitted Data:', this.formData, 'Salon ID:', this.salonId);
    alert('رزرو شما با موفقیت ثبت شد!');
    this.router.navigate(['/dashboard']);
  }
}