import { format, parse } from 'date-fns';
import { ar } from 'date-fns/locale';

export function formatDate(date: Date): string {
  return format(date, 'dd/MM/yyyy', { locale: ar });
}

export function formatTime(time: string): string {
  const date = parse(time, 'HH:mm', new Date());
  return format(date, 'hh:mm a', { locale: ar });
}