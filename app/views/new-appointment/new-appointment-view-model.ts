import { Observable } from '@nativescript/core';
import { TREATMENTS } from '../../shared/constants/treatments';
import { AppointmentService } from '../../services/appointment-service';
import { formatTime } from '../../shared/utils/date-utils';

export class NewAppointmentViewModel extends Observable {
  private appointmentService: AppointmentService;
  
  public patientName: string = '';
  public selectedDate: Date = new Date();
  public selectedTime: Date = new Date();
  public notes: string = '';
  public selectedTreatmentIndex: number = -1;
  public selectedDoctorIndex: number = -1;

  public treatments = TREATMENTS;
  public doctors = [
    { id: '1', name: 'د. أحمد محمد', specialization: 'طب عام' },
    { id: '2', name: 'د. سارة خالد', specialization: 'تقويم الأسنان' }
  ];

  constructor() {
    super();
    this.appointmentService = new AppointmentService();
  }

  onConfirmAppointment() {
    if (!this.validateForm()) {
      return;
    }

    const appointment = {
      id: Date.now().toString(),
      patientName: this.patientName,
      date: this.selectedDate,
      time: formatTime(this.selectedTime.toTimeString().slice(0, 5)),
      doctorId: this.doctors[this.selectedDoctorIndex].id,
      treatment: this.treatments[this.selectedTreatmentIndex].name,
      status: 'pending',
      notes: this.notes
    };

    this.appointmentService.addAppointment(appointment);
    // Navigate back to appointment list
  }

  private validateForm(): boolean {
    return (
      this.patientName.length > 0 &&
      this.selectedTreatmentIndex >= 0 &&
      this.selectedDoctorIndex >= 0
    );
  }
}