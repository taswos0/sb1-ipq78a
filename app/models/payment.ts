export interface Payment {
  id: string;
  appointmentId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  method: 'cash' | 'card' | 'insurance';
  date: Date;
  transactionId?: string;
}