import { Observable } from '@nativescript/core';
import { Appointment } from '../models/appointment';

export class AppointmentService extends Observable {
  private appointments: Appointment[] = [];

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
    this.notifyPropertyChange('appointments', this.appointments);
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  cancelAppointment(id: string): void {
    const appointment = this.appointments.find(a => a.id === id);
    if (appointment) {
      appointment.status = 'cancelled';
      this.notifyPropertyChange('appointments', this.appointments);
    }
  }
}