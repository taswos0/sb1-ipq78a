export interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  medicalHistory: string[];
  appointments: string[];
}

export interface PatientProfile {
  basicInfo: Patient;
  insuranceInfo?: {
    provider: string;
    policyNumber: string;
    expiryDate: Date;
  };
}