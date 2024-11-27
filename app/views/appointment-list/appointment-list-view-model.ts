import { Observable, Frame } from '@nativescript/core';
import { AppointmentService } from '../../services/appointment-service';

export class AppointmentListViewModel extends Observable {
  private appointmentService: AppointmentService;

  constructor() {
    super();
    this.appointmentService = new AppointmentService();
  }

  get appointments() {
    return this.appointmentService.getAppointments();
  }

  onNewAppointment() {
    Frame.topmost().navigate({
      moduleName: 'views/new-appointment/new-appointment-page',
      clearHistory: false
    });
  }
}