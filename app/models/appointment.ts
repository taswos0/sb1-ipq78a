export interface Appointment {
  id: string;
  patientName: string;
  date: Date;
  time: string;
  doctorId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  treatment: string;
  notes?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availability: string[];
}