import { LocalNotifications } from '@nativescript/local-notifications';
import { Appointment } from '../models/appointment';

export class NotificationService {
  async scheduleAppointmentReminder(appointment: Appointment) {
    const notificationTime = new Date(appointment.date);
    notificationTime.setHours(notificationTime.getHours() - 24); // 24 hours before

    await LocalNotifications.schedule([{
      id: parseInt(appointment.id),
      title: 'تذكير بموعد العيادة',
      body: `لديك موعد غداً مع ${appointment.doctorId} الساعة ${appointment.time}`,
      at: notificationTime
    }]);
  }

  async cancelNotification(appointmentId: string) {
    await LocalNotifications.cancel(parseInt(appointmentId));
  }
}