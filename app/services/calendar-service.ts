import { Calendar } from '@nativescript/calendar';
import { Appointment } from '../models/appointment';

export class CalendarService {
  async addToCalendar(appointment: Appointment): Promise<boolean> {
    try {
      const calendar = new Calendar();
      const event = {
        title: `موعد عيادة الأسنان - ${appointment.treatment}`,
        startDate: new Date(appointment.date),
        endDate: this.calculateEndTime(appointment),
        notes: appointment.notes,
        location: 'عيادة الأسنان'
      };

      await calendar.createEvent(event);
      return true;
    } catch (error) {
      console.error('Calendar error:', error);
      return false;
    }
  }

  private calculateEndTime(appointment: Appointment): Date {
    const endTime = new Date(appointment.date);
    const treatment = TREATMENTS.find(t => t.name === appointment.treatment);
    if (treatment) {
      endTime.setMinutes(endTime.getMinutes() + treatment.duration);
    }
    return endTime;
  }
}