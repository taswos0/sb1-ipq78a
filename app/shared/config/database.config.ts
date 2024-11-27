import { DatabaseConfig } from '../interfaces/database.interface';

export const databaseConfig: DatabaseConfig = {
  name: 'dental_clinic.db',
  version: 1,
  tables: [
    {
      name: 'appointments',
      columns: [
        { name: 'id', type: 'TEXT' },
        { name: 'patientName', type: 'TEXT' },
        { name: 'date', type: 'TEXT' },
        { name: 'time', type: 'TEXT' },
        { name: 'doctorId', type: 'TEXT' },
        { name: 'status', type: 'TEXT' },
        { name: 'treatment', type: 'TEXT' },
        { name: 'notes', type: 'TEXT', nullable: true }
      ],
      primaryKey: 'id'
    },
    {
      name: 'patients',
      columns: [
        { name: 'id', type: 'TEXT' },
        { name: 'name', type: 'TEXT' },
        { name: 'phone', type: 'TEXT' },
        { name: 'email', type: 'TEXT' },
        { name: 'medicalHistory', type: 'TEXT' }
      ],
      primaryKey: 'id'
    }
  ]
};